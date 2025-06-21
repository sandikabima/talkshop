const { Op } = require("sequelize")
const { Categories } = require("../../models")

class controllerCategories {
    static async addCategories(req, res) {
        const { name } = req.body

        const newCategories = await Categories.create({
            name
        })

        res.status(201).json({
            success: true,
            message: "Categories added successfully",
            data: newCategories
        })
    }

    static async getCategoriesById(req, res) {
        const { id } = req.params
        const getCegories = await Categories.findByPk(id)

        if (!getCegories) {
            const error = new Error("Categories not found")
            error.statusCode = 404
            throw error
        }

        res.status(200).json({
            success: "Categories fetched successfully",
            data: getCegories
        })
    }

    static async getAllCategories(req, res) {
        const allCategories = await Categories.findAll({
            order: [["createdAt", "DESC"]]
        })

        if (!allCategories || allCategories.length === 0) {
            const error = new Error("No product found")
            error.statusCode = 404
            throw error
        }

        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: allCategories
        });
    }

    static async getFilteredCategories(req, res) {
        const { search, page = 1, limit = 5, sort = "createdAt", order = "desc" } = req.query

        const offset = (page - 1) * limit
        const where = {}

        if (search) {
            where.name = { [Op.iLike]: `%${search.trim()}%` }
        }

        const allowedSortFields = ["name", "createdAt"]
        const allowedOrders = ['asc', 'desc']

        const sortField = allowedSortFields.includes(sort) ? sort : "createdAt"
        const sortOrder = allowedOrders.includes(order.toLowerCase()) ? order.toLowerCase() : "desc"

        const { count, rows } = await Categories.findAndCountAll({
            where,
            order: [[sortField, sortOrder]],
            offset: parseInt(offset),
            limit: parseInt(limit)
        })

        const currentPage = parseInt(page)
        const totalPages = Math.ceil(count / limit)

        const pagination = {
            totalCategories: count,
            currentPage,
            totalPages,
            limit: parseInt(limit),
            nextPage: currentPage < totalPages ? currentPage + 1 : null,
            prevPage: currentPage > 1 ? currentPage - 1 : null,
        }

        res.status(200).json({
            success: true,  
            message: rows.length === 0 ? "No Categories matched your search" : "Filtered & sorted categories fetched successfully",
            data: rows,
            pagination,
            sort: {
                by: sortField,
                order: sortOrder
            }
        })
    }

    static async updateCategories(req, res) {
        const { id } = req.params
        const { name } = req.body

        const getCategories = await Categories.findByPk(id)

        if (!getCategories) {
            const error = new Error("Categories not found")
            error.statusCode = 404
            throw error
        }

        await getCategories.update({
            name
        })

        res.status(200).json({
            success: true,
            message: "Categories updated successfully",
            data: getCategories
        })
    }

    static async deleteCategories(req, res) {
        const { id } = req.params

        const getCategories = await Categories.findByPk(id)

        if (!getCategories) {
            const error = new Error("Categories not found")
            error.statusCode = 404
            throw error
        }

        await getCategories.destroy()

        res.status(200).json({
            success: true,
            message: "Categories deleted successfully"
        })
    }
}

module.exports = controllerCategories