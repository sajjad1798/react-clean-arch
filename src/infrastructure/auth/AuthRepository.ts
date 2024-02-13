import { IAuthRepository, User } from "@/domain/auth/Auth";
import axios from "@/lib/axios";

export const authRepository: IAuthRepository = {
  async login(email: string, password: string): Promise<User> {
    const response = await axios.post("auth/login", { email, password });
    return response.data;
  },
};
