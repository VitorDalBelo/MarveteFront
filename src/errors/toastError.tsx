import { toast } from "react-toastify";

const toastError = (err:any) => {
  const errorMsg = err.response?.data?.error;
  if (errorMsg) {

      toast.error(errorMsg);
  } else {
    toast.error("Ocorreu um erro");
  }
};

export default toastError;
