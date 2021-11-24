import { Form, FormGroup, Input, Label, Button } from '@bootstrap-styled/v4';
import { NextComponentType } from "next";
import { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { LoginBox, LoginWrapper, Logo, FormWrapper } from "./login-form.styled";

export const LoginForm: NextComponentType = () => {
    const [payload, setPayload] = useState<{email: string, password: string}>({email: '', password: ''})
    const handleLogin = (e: Event) => {
        e.preventDefault()
        console.log(payload)
    }
    return (
        <LoginWrapper>
            <LoginBox>
                <Logo/>
                <FormWrapper>
                <Form onSubmit={handleLogin}>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="seu@email.com.br" onChange={(e: any) => setPayload({...payload, email: e.target?.value})} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Senha</Label>
                        <Input type="password" name="password" id="password" placeholder="******" onChange={(e: any) => setPayload({...payload, password: e.target?.value})}/>
                    </FormGroup>
                    <Button color="primary" type="submit" block>Entrar</Button>
                </Form>
                </FormWrapper>
            </LoginBox>
        </LoginWrapper>
    )
}