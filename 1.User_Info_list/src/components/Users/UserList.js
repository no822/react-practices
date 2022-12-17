import React from 'react';
import UserItem from "./UserItem";
import styles from './UserList.module.css';

const UserList = (props) => {
    return (
        <div data-testid={props.testid} className={styles.userList__container}>
            {props.list.map((userInfo, index) =>
                <UserItem
                    onRemoveUser={props.onRemoveUser}
                    key={index}
                    id={userInfo.id}
                    name={userInfo.userName}
                    age={userInfo.age}
                />)}
        </div>
    );
};

export default UserList;