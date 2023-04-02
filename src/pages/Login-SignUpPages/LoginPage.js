import { Container, Logo, UserDataForm, SignUpLink } from "./styles"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
export default function LoginPage(){
    const [dataForm, setDataForm] = useState({ email: '', password: '' })
    const [isLoading, setIsLoading] = useState(false);
    const {auth, setAuth} = useContext(AuthContext)
    const navigate = useNavigate();
    function handleChange(e) {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value });
      }
      
    

    function hanbleSubmit(e){
        e.preventDefault();

        setIsLoading(true);
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", dataForm)
        promise.then((res) => {
        console.log(res.data)
        const {id, name, cpf, email, membership, token} = res.data
        setAuth({id, name, cpf, email, membership, token})
        localStorage.setItem("auth" , JSON.stringify({id, name, cpf, email, token}))
        setIsLoading(false);
        console.log(auth)
        if(auth != undefined){
            if(membership === null){
                navigate("/subscriptions")
            }else{
                navigate("/home")
            }
        }
        })
        
        promise.catch(() => {
        setIsLoading(false);

        alert('Erro, tente novamente');
        });
    }
    
      return(
    <Container>
        <Logo>Driven+</Logo>
        <div>
            <UserDataForm onSubmit={hanbleSubmit}>
                <input  
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleChange}
                    value={dataForm.email}
                    disabled={isLoading}
                    required />
                <input 
                    placeholder="Senha"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={dataForm.password}
                    disabled={isLoading}
                    required/>
                <button type="submit" >Entrar</button>
            </UserDataForm>
        </div>
        
        <SignUpLink>
            <Link to="/sign-up">
                <h2>Não possui uma conta? Cadastre-se </h2>
            </Link>
        </SignUpLink>
        
    </Container>
)}

