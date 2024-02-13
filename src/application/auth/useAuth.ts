import { IAuthRepository, User } from "@/domain/auth/Auth";

export const useAuth =
  (authRepository: IAuthRepository) =>
  async (email: string, password: string): Promise<User> => {
    return authRepository.login(email, password);
  };
