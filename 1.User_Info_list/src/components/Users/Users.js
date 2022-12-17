import React from 'react';
import styles from './Users.module.css';
import Card from "../UI/Card";
import Container from "../UI/Container";
import UserList from "./UserList";

const Users = (props) => {
    if (props.users.length === 0) return <div></div>;

    return (
        <Container>
            <Card>
                <UserList onRemoveUser={props.onRemoveUser} testid='user-list' list={props.users} />
            </Card>
        </Container>
    )
}

export default Users;