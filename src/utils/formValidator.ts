interface LoginData {
  email: string;
  password: string;
}

interface SignupData extends LoginData {
  firstName?: string;
  lastName?: string;
}

export const validateAuthForm = (
  formData: LoginData | SignupData,
  isSignup: boolean = false,
): string | null => {
  if (!formData.email || formData.email.trim() === "") {
    return "Email is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email)) {
    return "Enter a valid email address";
  }

  if (typeof formData.password !== "string") {
    return "Password must be a valid string";
  }

  if (formData.password.trim() === "") {
    return "Password is required";
  }

  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!strongPasswordRegex.test(formData.password)) {
    return "Password must be 8+ chars with A-Z, a-z, 0-9, and special char";
  }

  if (isSignup) {
    const signupData = formData as SignupData;

    if (
      typeof signupData.firstName !== "string" ||
      signupData.firstName.trim() === ""
    ) {
      return "First name is required";
    }

    if (signupData.lastName && typeof signupData.lastName !== "string") {
      return "Last name must be a valid string";
    }
  }

  return null;
};
