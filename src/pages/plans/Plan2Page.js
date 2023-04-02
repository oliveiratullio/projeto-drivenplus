import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Container, PlanData, PlanLogo, DataLine1, DataLine2, CreditCardForm, BigInput, SmallImputDiv, SmallInput, FormButton } from "./stylePlan";
import {TbClipboardList} from "react-icons/tb"
import {FaMoneyBillWaveAlt} from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function Plan2Page(){
    const  data  = useContext(AuthContext)
    const [plan, setPlan] = useState()
    const [body, setBody] = useState({ cardName: '', cardNumber: '', securityNumber: '', expirationDate: '', membershipId: 2,});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); 
    function handleChange(e) {
        setBody({ ...body, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        console.log(body)
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", body, {
            headers: {
              'Authorization': `Bearer ${data.auth.token}`
            }
          })

        promise.then((res) => {
        setIsLoading(false);
        console.log(res)
        navigate("/home");
        });
        promise.catch(() => {
        setIsLoading(false);
        alert('Erro, tente novamente');
        });
    }
    
    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/2', {
            headers: {
              'Authorization': `Bearer ${data.auth.token}`
            }
          })
          promise.then((res) =>{
            setPlan(res.data)
            console.log(res.data)
            console.log(plan)})
          
          promise.catch((err) => console.log(err.response.data))
    },[])
        return(
            <Container>
                <PlanLogo>
                    
                    Driven Plus
                </PlanLogo>
                <PlanData>
                    <DataLine1>
                        <TbClipboardList color="#ed6590" width="12px" height="16px" />    
                        Benefícios:
                    </DataLine1>
                    <DataLine2>
                        <p>1. Brindes exclusivos</p>
                        <p>2. Materiais bônus de web</p>
                        <p>3. Aulas bônus de tech</p>
                    </DataLine2>
                    <DataLine1>
                        <FaMoneyBillWaveAlt color="#ed6590" width="15px" height="10.5px" />
                        Preco:
                    </DataLine1>
                    <DataLine2><p>R$ 69,99 cobrados mensalmente</p></DataLine2>
                </PlanData>
                <CreditCardForm onSubmit={handleSubmit}>
                    <BigInput
                    type="text"
                    placeholder="Nome impresso no cartão"
                    name="cardName"
                    onChange={handleChange}
                    value={body.cardName}
                    disabled={isLoading}
                    required/>
                    <BigInput
                    type="text"
                    placeholder="Digitos do cartão"
                    name="cardNumber"
                    onChange={handleChange}
                    value={body.cardNumber}
                    disabled={isLoading}
                    required/>
                    <SmallImputDiv>
                        <SmallInput
                        type="text"
                        placeholder="Código de segurança"
                        name="securityNumber"
                        onChange={handleChange}
                        value={body.securityNumber}
                        disabled={isLoading}
                        required/>
                        <SmallInput
                        type="text"
                        placeholder="Validade"
                        name="expirationDate"
                        onChange={handleChange}
                        value={body.expirationDate}
                        disabled={isLoading}
                        required/>
                    </SmallImputDiv>
                    <FormButton type="submit" disabled={isLoading}>ASSINAR</FormButton>
                </CreditCardForm>
            </Container>
        )
}

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    position: fixed;
    z-index: 1;
    justify-content: center;
    align-items: center;
`
export const ModalContent = styled.div`
    width: 248px;
    height: 210px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
`
