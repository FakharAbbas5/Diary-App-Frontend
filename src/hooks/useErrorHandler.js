import { USER_STORAGE_KEY } from "../helpers/variables";

const useErrorHandler = history => {
  const handleError = err => {
    alert(err.response.data.messages[0].message);
    if (err.response.status === 401) {
      localStorage.removeItem(USER_STORAGE_KEY);
      history("/signin");
    }
  };
  return { handleError };
};

export default useErrorHandler;
