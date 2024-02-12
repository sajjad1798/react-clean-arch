import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../domain/validation";

export function useSignup(userRepository) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    try {
      await userRepository.signup(data);
      // Handle successful signup, e.g., navigate to dashboard
    } catch (error) {
      // Handle errors, e.g., show an error message
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}
