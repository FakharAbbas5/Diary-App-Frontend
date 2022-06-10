import axios from "axios";
import { BACKEND_API_URL } from "../helpers/variables";
import useErrorHandler from "./useErrorHandler";

const useAuthentication = history => {
  const { handleError } = useErrorHandler(history);

  const register = async data => {
    try {
      const response = await axios.post(
        `${BACKEND_API_URL}/user/auth/register`,
        data
      );
      return response.data;
    } catch (err) {
      handleError(err);
    }
  };

  const login = async data => {
    try {
      const response = await axios.post(
        `${BACKEND_API_URL}/user/auth/login`,
        data
      );
      return response.data;
    } catch (err) {
      handleError(err);
    }
  };

  return {
    register,
    login,
  };
};

export default useAuthentication;
