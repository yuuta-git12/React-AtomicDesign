import styled from "styled-components"
import { Navigate, useNavigate } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton"

export const Top = () => {
    const navigate = useNavigate();

    // ボタンクリックでusersページに画面遷移
    const onClickAdmin = () => navigate("/users", {state: { isAdmin:true }});
    const onClickGeneral = () => navigate("/users", {state:{ isAdmin:false }});
    return (
        <SContainer>
            <h2>TOPページです</h2>
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
            <br />
            <br />
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;

`;