import { useSignup } from "@/application/useSignup";
import { useUserRepository } from "@/infrastructure/useUserRepository";

export const SignupPage = () => {
  const userRepository = useUserRepository();
  const { register, handleSubmit, errors, onSubmit } =
    useSignup(userRepository);

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        {errors.name && <p>{errors.name.message}</p>}

        <input {...register("email")} placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}

        <input {...register("password")} placeholder="Password" />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};
