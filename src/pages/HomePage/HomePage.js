import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Container, Logo, UserIcon, WelcomeMassage, Benefits, Benefit, PlanButtons, ChangePlan, CancelPlan } from "./styleHomePage";
import {FaUserCircle} from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function HomePage(){
    const navigate = useNavigate();
    const  data  = useContext(AuthContext)
    console.log(data);
    function changePlan(){
        navigate("/subscriptions")
    }
    function cancelPlan(){
        const promise = axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", {
            headers: {
              'Authorization': `Bearer ${data.auth.token}`
            }
          })
        promise.then((res) => {
            console.log(res.data)
            navigate("/subscriptions")
        })
        promise.catch((err) => console.log(err.response.data))
    }
    return(
        <Container>
            <Logo>
                <img src={data.auth.membership.image} />
            </Logo>
            <UserIcon>
                <FaUserCircle size="34px"/>
            </UserIcon>
            <WelcomeMassage>
                <p>Olá, {data.auth.name}</p>
            </WelcomeMassage>
            <Benefits>
                {data.auth.membership.perks.map((p) => (
                    <a href={p.link} target="_blank">
                        <Benefit key={p.id}>
                        <p>{p.title}</p>
                    </Benefit>
                    </a>
                ))}
            </Benefits>
            <PlanButtons>
                <ChangePlan onClick={changePlan}>Mudar Plano</ChangePlan>
                <CancelPlan onClick={cancelPlan}>Cancelar Plano</CancelPlan>
            </PlanButtons>
        </Container>
    )
}


