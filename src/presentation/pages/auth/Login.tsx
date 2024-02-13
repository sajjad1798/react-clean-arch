import { useAuth } from "@/application/auth/useAuth";
import { authRepository } from "@/infrastructure/auth/AuthRepository";
import { Button } from "@/presentation/components/ui/button";
import { Input } from "@/presentation/components/ui/input";
import React, { useState } from "react";

export const LoginPage: React.FC = () => {
  const loginUser = useAuth(authRepository);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const user = await loginUser(email, password);
      console.log("Login successful", user);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="container mx-auto ">
      <div className="min-h-screen w-full  flex justify-center items-center">
        <div className="flex flex-col flex-grow gap-4 max-w-[400px]">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </div>
    </div>
  );
};
