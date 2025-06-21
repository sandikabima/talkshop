const { Product, Categories } = require("../../models")
const { Op, where, fn, col } = require("sequelize");
const { cloudinary } = require("../../config/cloudinary")
const { streamUpload } = require("../../helper/cloudinaryUpload")

class controllerProduct {
	static async addProduct(req, res) {
		const { name, description, price, categoryId } = req.body

		const result = await streamUpload(req.file.buffer)
		const newProduct = await Product.create({
			name, description, price, categoryId, imageUrl: result.secure_url
		})

		res.status(201).json({
			success: true,
			message: "Product added successfully",
			data: newProduct
		})
	}

	static async getProductById(req, res) {
		const { id } = req.params
		const getProduct = await Product.findByPk(id)

		if (!getProduct) {
			const error = new Error("Product not found")
			error.statusCode = 404
			throw error
		}

		res.status(200).json({
			success: "Product fetched successfully",
			data: getProduct
		})
	}

	static async getFilteredProduct(req, res) {
		const { search, page = 1, limit = 5, sort = "createdAt", order = "desc" } = req.query

		const allowedSortFields = ["name", "createdAt"];
		const allowedOrders = ["asc", "desc"];

		const sortField = allowedSortFields.includes(sort) ? sort : "createdAt";
		const sortOrder = allowedOrders.includes(order.toLowerCase()) ? order.toLowerCase() : "desc";

		const globalWhere = {};

		if (search) {
			globalWhere[Op.or] = [
				{ name: { [Op.iLike]: `%${search}%` } },
				{ "$Category.name$": { [Op.iLike]: `%${search}%` } }
			];
		}

		let paginationLimit = null
		let offset = 0;

		if (limit && limit !== "all" && limit !== "0") {
			paginationLimit = parseInt(limit);
			if (!isNaN(paginationLimit)) {
				offset = (parseInt(page) - 1) * paginationLimit;
			}
		}

		const { count, rows } = await Product.findAndCountAll({
			where: globalWhere,
			include: [
				{
					model: Categories,
					attributes: ["name"],
					required: true
				}
			],
			order: [[sortField, sortOrder]],
			offset: paginationLimit ? offset : undefined,
			limit: paginationLimit
		});

		const currentPage = parseInt(page)
		const totalPages = paginationLimit ? Math.ceil(count / paginationLimit) : 1;

		const pagination = {
			totalProduct: count,
			currentPage,
			totalPages,
			limit: parseInt(limit),
			netPage: currentPage < totalPages ? currentPage + 1 : null,
			prevPage: currentPage > 1 ? currentPage - 1 : null
		}

		res.status(200).json({
			success: true,
			message: rows.length === 0 ? "No product matched your search" : "Filtered & sorted product fetched successfully",
			data: rows,
			pagination,
			sort: {
				by: sortField,
				order: sortOrder
			}
		})
	}

	static async updateProduct(req, res) {
		const { id } = req.params
		const { name, description, price, categoryId } = req.body

		const getProduct = await Product.findByPk(id)

		if (!getProduct) {
			const error = new Error("Product not found")
			error.statusCode = 404
			throw error
		}

		if (getProduct.imageUrl) {
			const publicId = getProduct.imageUrl.split("/").pop().split(".")[0];
			await cloudinary.uploader.destroy(`ecommerce-products/${publicId}`);
		}

		const result = await streamUpload(req.file.buffer)

		await getProduct.update({
			name, description, price, categoryId, imageUrl: result.secure_url
		})

		res.status(201).json({
			success: true,
			message: "Product updated successfully",
			data: getProduct
		})

	}

	static async deleteProduct(req, res) {
		const { id } = req.params

		const getProduct = await Product.findByPk(id)
		if (!getProduct) {
			const error = new Error("Product not found")
			error.statusCode = 404
			throw error
		}

		if (getProduct.imageUrl) {
			const publicId = getProduct.imageUrl.split("/").pop().split(".")[0];
			await cloudinary.uploader.destroy(`ecommerce-products/${publicId}`);
		}

		await getProduct.destroy()
		res.status(200).json({
			success: true,
			messsage: "Product deleted successfully"
		})
	}

}

module.exports = controllerProduct