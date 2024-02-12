import { useCallback } from "react";
import axios from "../lib/axios";

export function useUserRepository() {
  const signup = useCallback(async (signupData) => {
    const response = await axios.post("/signup", signupData);
    if (response.data) {
      // Handle the response, e.g., store the user token
    }
  }, []);

  return {
    signup,
  };
}
