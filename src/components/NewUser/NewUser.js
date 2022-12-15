import React from 'react';
import Card from "../UI/Card";
import Container from "../UI/Container";
import NewUserForm from "./NewUserForm";

const NewUser = (props) => {
    const validateInfo = (userInfo) => {
        const { userName, age } = userInfo;
        if (userName.length === 0 || isNaN(age)) {
            throw new Error('Please enter a valid name and age (non-empty values)');
        } else if (age < 0) {
            throw new Error('Please enter a valid age (>0)');
        }
    }

    const addIdToUserInfo = (userInfo) => {
        try {
            validateInfo(userInfo);
            const userInfoWithId = {
                id: Math.random().toString(36).substr(2, 16),
                ...userInfo
            }
            props.onAddUser(userInfoWithId);
        } catch (e) {
            props.onOpenPopUp(e.message);
        }
    }

    return (
        <Container>
            <Card>
                <NewUserForm onAddUser={addIdToUserInfo} />
            </Card>
        </Container>
    );
};

export default NewUser;