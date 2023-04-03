import styled from "styled-components"

export const Container = styled.div`
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    background-color: #0E0E13;
    
`
export const Logo = styled.div`
    width: 299px;
    height: 49px;
    margin-left: 38px;
    margin-top: 134px;
    font-size: 50px;
    justify-content: center;
    display: flex;
    color: #FFFFFF;
`
export const UserDataForm = styled.form`
    width: 299px;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-left: 38px;
    justify-content: center;
    input{
        width: 285px;
        height: 52px;
        margin-bottom: 16px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #7E7E7E;
        padding-left: 14px;
        border-radius: 8px;
        border: none;
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 18px 122px;
        gap: 10px;
        position: absolute;
        width: 299px;
        height: 52px;
        left: 38px;
        top: 427px;
        border: none;
        background-color: #FF4791;
        border-radius: 8px;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 14px;
        line-height: 16.41px;
    }

`
export const SignUpLink = styled.div`
    display: flex;
    margin-top:  80px;
    margin-left: 74px;
    font-family: 'Roboto';
    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;
        color: #FFFFFF;

    }
`
export const LoginLink = styled.div`
    display: flex;
    margin-top: 120px;
    margin-left: 101px;
    font-family: 'Roboto';
    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;
        color: #FFFFFF;

    }
`