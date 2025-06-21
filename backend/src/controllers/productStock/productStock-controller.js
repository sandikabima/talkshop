const { Op, where, fn, col } = require("sequelize");
const { ProductStock, Product } = require("../../models")

class controllerProductStock {
	static async addProductStock(req, res) {
		const { productId, quantity, location } = req.body

		const newProductStock = await ProductStock.create({
			productId, quantity, location
		})

		res.status(201).json({
			success: true,
			message: "ProductStock added successfully",
			data: newProductStock
		})
	}

	static async getProductStockById(req, res) {
		const { id } = req.params
		const getProductStockById = await ProductStock.findOne({ where: { productStockId: id }, include: { model: Product, attributes: ["name"] } })

		if (!getProductStockById) {
			const error = new Error("ProductStock not found")
			error.statusCode = 404
			throw error
		}

		res.status(200).json({
			success: "ProductStock fetched successfully",
			data: getProductStockById
		})
	}

	static async getFilteredProductStock(req, res) {
		const { search, page = 1, limit = 5, sort = "createdAt", order = "desc" } = req.query;

		const offset = (page - 1) * limit;
		const allowedSortFields = ["location", "createdAt"];
		const allowedOrders = ["asc", "desc"];

		const sortField = allowedSortFields.includes(sort) ? sort : "createdAt";
		const sortOrder = allowedOrders.includes(order.toLowerCase()) ? order.toLowerCase() : "desc";

		const globalWhere = {};

		if (search) {
			globalWhere[Op.or] = [
				{ location: { [Op.iLike]: `%${search}%` } },
				where(fn("LOWER", col("Product.name")), {
					[Op.like]: `%${search.toLowerCase()}%`
				})
			];
		}

		const { count, rows } = await ProductStock.findAndCountAll({
			where: globalWhere,
			include: [
				{
					model: Product,
					attributes: ["name"],
					required: true
				}
			],
			order: [[sortField, sortOrder]],
			offset: parseInt(offset),
			limit: parseInt(limit)
		});

		const currentPage = parseInt(page);
		const totalPages = Math.ceil(count / limit);

		res.status(200).json({
			success: true,
			message: rows.length === 0 ? "No productStock matched your search" : "Filtered product stock fetched successfully",
			data: rows,
			pagination: {
				totalData: count,
				currentPage,
				totalPages,
				limit: parseInt(limit),
				nextPage: currentPage < totalPages ? currentPage + 1 : null,
				prevPage: currentPage > 1 ? currentPage - 1 : null,
			},
			sort: {
				by: sortField,
				order: sortOrder,
			},
		});
	}

	static async updateProductStock(req, res) {
		const { id } = req.params
		const { productId, quantity, location } = req.body

		const getProductStoct = await ProductStock.findByPk(id)

		if (!getProductStoct) {
			const error = new Error("ProductStock not found")
			error.statusCode = 404
			throw error
		}

		await getProductStoct.update({
			productId, quantity, location
		})

		res.status(200).json({
			success: true,
			message: "ProductStock updated successfully",
			data: getProductStoct
		})
	}

	static async deleteProductStock(req, res) {
		const { id } = req.params

		const getProductStock = await ProductStock.findByPk(id)

		if (!getProductStock) {
			const error = new Error("ProductStock not found")
			error.statusCode = 404
			throw error
		}

		await getProductStock.destroy()

		res.status(200).json({
			success: true,
			message: "ProductStock deleted successfully"
		})
	}
}

module.exports = controllerProductStock