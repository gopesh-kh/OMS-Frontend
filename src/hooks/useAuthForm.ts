import { useState } from "react";
import type { AuthFormErrorType } from "../types/formTypes";

const useAuthForm = <T extends object>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [validationErrors, setValidationErrors] = useState<AuthFormErrorType>(
    {},
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrorMessage("");

    setValidationErrors((prev) => {
      const updated = { ...prev };
      delete updated[name as keyof AuthFormErrorType];
      return updated;
    });
  };

  return {
    formData,
    setFormData,
    errorMessage,
    setErrorMessage,
    validationErrors,
    setValidationErrors,
    handleChange,
  };
};

export default useAuthForm;
