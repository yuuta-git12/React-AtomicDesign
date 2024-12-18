import styled from "styled-components"
import { useLocation } from "react-router-dom";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard.jsx"

const users = [...Array(10).keys()].map(((val) => {
    return {
        id :val,
        name: `ユータ${val}`,
        image: "https://images.unsplash.com/photo-1585910166082-b505ca55cd14?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        email: "1234@example.com",
        phone: "090-1111-2222",
        company: {
        name: "テスト株式会社"
        },
        website: "http://google.com"
    }
}))

export const Users = () => {
    const { state } = useLocation();
    const isAdmin = state ? state.isAdmin : false;
    
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} isAdmin={isAdmin}/>
                ))}
            </SUserArea>
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    grid-gap: 20px;
`;