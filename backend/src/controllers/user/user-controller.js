const { Op } = require("sequelize")
const { User } = require("../../models")
const { hashPassword } = require("../../helper/bcrypt");

class controllerUser {
    static async addUser(req, res) {
        const { username, email, password } = req.body

        const newUser = await User.create({
            userName: username, email, password
        })

        res.status(201).json({
            success: true,
            message: "User added successfully",
            data: newUser
        })
    }

    static async getUserById(req, res) {
        const { id } = req.params
        const newUser = await User.findByPk(id)

        if (!newUser) {
            const error = new Error("User not found")
            error.statusCode = 404
            throw error
        }

        res.status(200).json({
            success: "User fetched successfully",
            data: newUser
        })
    }

    static async getFilteredUser(req, res) {
        const { search, page = 1, limit = 5, sort = "createdAt", order = "desc" } = req.query

        const offset = (page - 1) * limit
        const where = {
            role: "customer"
        }

        if (search) {
            where.userName = { [Op.iLike]: `%${search.trim()}%` }
        }

        const allowedSortFields = ["userName", "createdAt"]
        const allowedOrders = ['asc', 'desc']

        const sortField = allowedSortFields.includes(sort) ? sort : "createdAt"
        const sortOrder = allowedOrders.includes(order.toLowerCase()) ? order.toLowerCase() : "desc"

        const { count, rows } = await User.findAndCountAll({
            where,
            order: [[sortField, sortOrder]],
            offset: parseInt(offset),
            limit: parseInt(limit)
        })

        const currentPage = parseInt(page)
        const totalPages = Math.ceil(count / limit)

        const pagination = {
            totalUser: count,
            currentPage,
            totalPages,
            limit: parseInt(limit),
            nextPage: currentPage < totalPages ? currentPage + 1 : null,
            prevPage: currentPage > 1 ? currentPage - 1 : null,
        }

        res.status(200).json({
            success: true,
            message: rows.length === 0 ? "No user matched your search" : "Filtered & sorted user fetched successfully",
            data: rows,
            pagination,
            sort: {
                by: sortField,
                order: sortOrder
            }
        })
    }

    static async updateUser(req, res) {
        const { id } = req.params
        const { username, email, password } = req.body

        const newUser = await User.findByPk(id)

        if (!newUser) {
            const error = new Error("User not found")
            error.statusCode = 404
            throw error
        }

        const isPass = hashPassword(password)
        await newUser.update({
            userName: username, email, password: isPass
        })

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data : newUser
        })
    }

    static async deleteUser(req, res) {
        const { id } = req.params

        const newUser = await User.findByPk(id)

        if (!newUser) {
            const error = new Error("User not found")
            error.statusCode = 404
            throw error
        }

        await newUser.destroy()

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
    }
}

module.exports = controllerUser