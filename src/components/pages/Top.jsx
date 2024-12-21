import styled from "styled-components"
import { Navigate, useNavigate } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { useContext } from "react";
import { UserContext } from "../../providers/ UserProvider";

export const Top = () => {
    const navigate = useNavigate();
    const { setUserInfo } = useContext(UserContext);

    // ボタンクリックでusersページに画面遷移
    const onClickAdmin = () => {
        setUserInfo({isAdmin: true});
        navigate("/users");
    };
    const onClickGeneral = () => {
        setUserInfo({isAdmin: false});
        navigate("/users");
    }
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