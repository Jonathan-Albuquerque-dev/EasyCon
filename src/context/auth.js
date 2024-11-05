import { router } from "expo-router";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const logado = {
    nome: "jonatan",
    senha: "123",
  };
  useEffect(() => {
    if (logado.nome == "" && logado.senha == "") {
      router.replace("/");
    } else {
      router.replace("../(Auth)/Home");
    }
  }, []);

  function signIn(email, password) {
    if (email !== "" && password !== "") {
      setUser({
        email: email,
        password: password,
      });
      router.replace("../(Auth)/Home");
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}
