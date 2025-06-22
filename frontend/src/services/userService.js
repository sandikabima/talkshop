import authApi from "../shared/lib/publicApi";

const UserService = {
  getAll: async (params) => {
    const response = await authApi.get("/user", { params });
    return response.data;
  },
  getById: async (id) => {
    const response = await authApi.get(`/user/${id}`);
    return response.data;
  },
  add: async (data) => {
    const response = await authApi.post("/user", data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await authApi.put(`/user/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await authApi.delete(`/user/${id}`);
    return response.data;
  },
};

export default UserService;