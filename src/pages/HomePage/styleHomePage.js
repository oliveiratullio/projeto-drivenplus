import styled from "styled-components";

export const Container = styled.div `
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0e0e13;
    color
    
`
export const Logo = styled.div`
    width: 61px;
    height: 52px;
    position: absolute;
    left: 38px;
    top: 32px;
    color: #FFFFFF;
    img{
        width: 50px;
        height: 75px;
    }
`
export const UserIcon = styled.div`
    width: 34px;
    height: 33px;
    position: absolute;
    top:22px;
    left: 319px;
    react-icon{
        width: 34px;
    }
`
export const WelcomeMassage = styled.div`
    width: 300px;
    height: 30px;
    position: absolute;
    top: 95px;
    left: 37.5px;
    display: flex;
    justify-content: center;
    p{
        font-family: 'Roboto';
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;
    }

`
export const Benefits = styled.div`
    width: 299px;
    height: auto;
    display: flex;
    position: absolute;
    left: 38px;
    top: 176px;
    flex-direction: column;
    a{
        text-decoration: none;
        color: #FFFFFF;
    }
`
export const Benefit = styled.div`
    width: 299px;
    height: 52px;
    display: flex;;
    background-color: #ed6590;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 8px;
    p{
        font-family: 'Roboto';
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    }
`
export const PlanButtons = styled.div`
    width: 299px;
    height: auto;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 12px;
    left: 38px;
    

`
export const ChangePlan = styled.button`
    width: 299px;
    height: 52px;
    border-radius: 8px;
    border: none;
    margin-top: 8px; 
    background-color: #ed6590;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
`
export const CancelPlan = styled.button`
    width: 299px;
    height: 52px;
    border-radius: 8px;
    border: none;
    margin-top: 8px;
    background-color: #ee5346;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
`