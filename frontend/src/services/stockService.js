import authApi from "../shared/lib/publicApi";

const StockService = {
  getAll: async (params) => {
    const response = await authApi.get("/productsstock", { params });
    return response.data;
  },
  getById: async (id) => {
    const response = await authApi.get(`/productsstock/${id}`);
    return response.data;
  },
  add: async (data) => {
    const response = await authApi.post("/productsstock", data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await authApi.put(`/productsstock/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await authApi.delete(`/productsstock/${id}`);
    return response.data;
  },
};

export default StockService;