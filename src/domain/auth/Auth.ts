export interface User {
  id: string;
  username: string;
  email: string;
}

export interface IAuthRepository {
  login(email: string, password: string): Promise<User>;
}
