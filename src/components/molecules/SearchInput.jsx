import styled from "styled-components"
import { memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { Input } from "../atoms/input/Input"

export const SearchInput = memo(() => {

    //再レンダリング確認用
    console.log("SerchInput");
    return (
        <SContainer>
            <Input placeholder="検索条件を入力"/>
            <SButtonWrapper>
                <PrimaryButton>検索</PrimaryButton>
            </SButtonWrapper>
        </SContainer>
    );
});

const SContainer = styled.div`
    display: flex;
    align-items: center;
`;

const SButtonWrapper = styled.div`
    padding-left: 8px;
`

