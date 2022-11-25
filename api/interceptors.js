import { getSecureItem } from "../helpers/secure-store";

export const setInterceptors = (instance) => {
  instance.interceptors.request.use(
    async (config) => {
      if (__DEV__) console.log("request to ", config.url);

      const authData = await getSecureItem("authData");

      if (authData) {
        config.headers["Authorization"] = `Bearer ${authData.token}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (res) => res,
    (error) => {
      console.log(error);

      return Promise.reject(error);
    }
  );
};
