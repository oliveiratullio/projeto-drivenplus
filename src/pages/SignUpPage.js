import { Container, UserDataForm, LoginLink  } from "./Login-SignUpPages/styles"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { useState, } from "react";
export default function SignUpPage(){
    const navigate = useNavigate();
    const [body, setBody] = useState({ name: '', email: '', cpf: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);

    function handleChange(e) {
        setBody({ ...body, [e.target.name]: e.target.value });
  }

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        console.log(body)
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", body)

        promise.then((res) => {
        setIsLoading(false);
        console.log(res)
        navigate("/");
        });
        promise.catch(() => {
        setIsLoading(false);
        alert('Erro, tente novamente');
        });
  }
    return(
        <Container>
            <div>
            <UserDataForm onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Nome"
                name="name"
                onChange={handleChange}
                value={body.name}
                disabled={isLoading}
                required/>
                <input
                type="text"
                placeholder="CPF"
                name="cpf"
                onChange={handleChange}
                value={body.cpf}
                disabled={isLoading}
                required/>
                <input
                type="email"
                placeholder="E-mail"
                name="email"
                onChange={handleChange}
                value={body.email}
                disabled={isLoading}
                required/>
                <input
                type="password"
                placeholder="Senha"
                name="password"
                onChange={handleChange}
                value={body.password}
                disabled={isLoading}
                required/>
                <button type="submit" disabled={isLoading}>CADASTRAR</button>
            </UserDataForm>
            </div>
            <LoginLink>
                <Link to="/">
                    <h2>Já possui uma conta? Entre </h2>
                </Link>
             </LoginLink>
        </Container>
    )
}