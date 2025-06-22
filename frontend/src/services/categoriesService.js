import authApi from "../shared/lib/publicApi";

const CategoriesService = {
  getAll: async (params) => {
    const response = await authApi.get("/categories", { params });
    return response.data;
  },
  getById: async (id) => {
    const response = await authApi.get(`/categories/${id}`);
    return response.data;
  },
  add: async (data) => {
    const response = await authApi.post("/categories", data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await authApi.put(`/categories/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await authApi.delete(`/categories/${id}`);
    return response.data;
  },
};

export default CategoriesService;