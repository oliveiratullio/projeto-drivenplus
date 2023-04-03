import styled from "styled-components"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function Subsctiptions(){
    const  data  = useContext(AuthContext);
    const [planList, setPlanList] = useState([]);
    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', {
        headers: {
          'Authorization': `Bearer ${data.auth.token}`
        }
      });
        promise.then((res) =>{
            setPlanList(res.data)
            console.log(planList)})
    }, [])
    return(
        <Container>
          <Header>Escolha seu Plano</Header>
            {planList.map((p) => (
              <Link to={`/subscriptions/${p.id}`}>
                <Plan key={p.id}>
                  <img src={p.image}/>
                  <Price>R$ {p.price}</Price>
              </Plan>
              </Link>
           ))}
        </Container>
        
    )
    
}

const Container =styled.div `
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0e0e13;
`
const Header = styled.div`
  width: 263px;
  height: 38px;
  margin-top: 29px;
  margin-bottom: 14px;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  color: #FFFFFF;

`
const Plan = styled.div`
  width: 290px;
  height: 180px;
  display: flex;
  align-items: center;
  border: 3px solid #7E7E7E;
  border-radius: 12px;
  margin-bottom: 10px;
  img{
    margin-left: 16px;
  }

`
const Price = styled.div`
    width: 97px;
    height: 28px;
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 21px ;
`