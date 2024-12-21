import styled from "styled-components"
import { Card } from "../../atoms/card/Card";
import { memo } from "react";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = memo((props) => {
    //再レンダリング確認用
    console.log("UserCard");
    const { user } = props;
    return (
        <Card>
            <UserIconWithName image={user.image} name={user.name} />
            <SDl>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>TEL</dt>
                <dd>{user.phone}</dd>
                <dt>会社名</dt>
                <dd>{user.company.name}</dd>
                <dt>WEB</dt>
                <dd>{user.website}</dd>
            </SDl>
        </Card>
    )
});

const SDl = styled.dl`
    text-align: ;
    margin-bottom: 0px;
    dt {
        float: left;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap: break-word;
    }
`