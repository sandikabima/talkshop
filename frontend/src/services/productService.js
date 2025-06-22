import authApi from "../shared/lib/publicApi";

const ProductService = {
  getAll: async (params) => {
    const response = await authApi.get("/product", { params });
    return response.data;
  },
  getById: async (id) => {
    const response = await authApi.get(`/product/${id}`);
    return response.data;
  },
  add: async (data) => {
    const response = await authApi.post("/product", data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await authApi.put(`/product/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await authApi.delete(`/product/${id}`);
    return response.data;
  },
};

export default ProductService;