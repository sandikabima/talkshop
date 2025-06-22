import api from "./api";
import { setupInterceptors } from "./interceptor";

let isInterceptorSetup = false;

const setupApiWithStore = (store) => {
  if (!isInterceptorSetup) {
    setupInterceptors(api, store);
    isInterceptorSetup = true;
  }
};

export { setupApiWithStore };
export default api;
