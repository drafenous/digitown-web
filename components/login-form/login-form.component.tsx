import { Button, Form, FormGroup, Input, Label } from "@bootstrap-styled/v4";
import { NextComponentType } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Auth } from "../../services/auth";
import { FormWrapper, LoginBox, LoginWrapper, Logo } from "./login-form.styled";

export const LoginForm: NextComponentType = () => {
  const router = useRouter();
  const [payload, setPayload] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const auth = new Auth();

  const handleLogin = async (e: Event) => {
    e.preventDefault();
    auth
      .login(payload.email, payload.password)
      .then((res) => {
        if (res.data) {
          delete res.data.passwordHash;
          localStorage.setItem("auth", JSON.stringify(res.data));
          router.push("/");
        } else {
          alert("Usuário ou senha inválidos");
        }
      })
      .catch((e) => {
        alert("Usuário ou senha inválidos");
      });
  };
  return (
    <LoginWrapper>
      <LoginBox>
        <Logo />
        <FormWrapper>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="seu@email.com.br"
                onChange={(e: any) =>
                  setPayload({ ...payload, email: e.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Senha</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="******"
                onChange={(e: any) =>
                  setPayload({ ...payload, password: e.target?.value })
                }
              />
            </FormGroup>
            <Button color="primary" type="submit" block>
              Entrar
            </Button>
          </Form>
        </FormWrapper>
      </LoginBox>
    </LoginWrapper>
  );
};
