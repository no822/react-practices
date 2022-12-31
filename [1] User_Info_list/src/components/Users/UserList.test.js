import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserList from "./UserList";

describe('<UserList />', () => {
    test('if userItem was clicked, the element should be removed in list', () => {
        let dummyUsers = [
            { id: Math.random().toString(36).substr(2, 16), userName: 'changju', age: 20 },
            { id: Math.random().toString(36).substr(2, 16), userName: 'yunsung', age: 35 },
            { id: Math.random().toString(36).substr(2, 16), userName: 'sunyong', age: 19 },
            { id: Math.random().toString(36).substr(2, 16), userName: 'donald', age: 49 }
        ];

        const removeUserHandler = (userId) => {
            dummyUsers = dummyUsers.filter(user => user.id !== userId);
        };

        // Arrange
        render(<UserList list={dummyUsers} testid='user-list' onRemoveUser={removeUserHandler} />);
        const itemLength = screen.getAllByText('years old)', {exact: false}).length;

        // Act
        const userItem = screen.getAllByText('years old)', {exact: false})[0];
        userEvent.click(userItem);

        // Assert
        expect(itemLength - 1).toBe(dummyUsers.length);
    })
})