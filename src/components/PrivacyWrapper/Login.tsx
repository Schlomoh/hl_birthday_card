import { ChangeEvent, FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import { AuthenticationContext } from "@/AuthContext";
import { Paragraph } from "../Typography";

const LoginContainer = styled.div`
  height: calc(100svh - 4rem);

  form {
    position: relative;
    translate: -50% -50%;
    left: 50%;
    top: 50%;

    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  input {
    box-sizing: border-box;
    border: none;
    width: 100%;
    padding: 0.5rem;

    background-color: ${({ theme }) => theme.colors.grey.light};
    color: ${({ theme }) => theme.colors.base.black};
    border-radius: 10px;
    text-align: center;
  }

  button {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.accent.primary};
    color: ${({ theme }) => theme.colors.base.white};
  }
`;

const Login = () => {
  const [input, setInput] = useState("");
  const { setIsAuthenticated } = useContext(AuthenticationContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const password = import.meta.env.VITE_ENCRYPTION_PASSWORD;
    if (input === password) setIsAuthenticated(true);
  };

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">
          <Paragraph color="grey">Enter the password</Paragraph>
        </label>
        <input
          required
          id="password"
          type="password"
          onChange={handleChange}
          value={input}
        />
        <button type="submit">Open</button>
      </form>
    </LoginContainer>
  );
};

export default Login;
