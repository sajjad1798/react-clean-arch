import { Button } from "@/presentation/components/ui/button";
import { Input } from "@/presentation/components/ui/input";
import React, { useState } from "react";

export const SignupPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    console.log("Signup successful", { email, name, password });
  };

  return (
    <div className="container mx-auto ">
      <div className="min-h-screen w-full  flex justify-center items-center">
        <div className="flex flex-col flex-grow gap-4 max-w-[400px]">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Button onClick={handleSignup}>Create Account</Button>
        </div>
      </div>
    </div>
  );
};
