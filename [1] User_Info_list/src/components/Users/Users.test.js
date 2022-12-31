import {screen, render} from "@testing-library/react";
import Users from "./Users";

describe('<Users /> component', () => {
    test('if props.users.length is 0, does not render Users component', () => {
        render(<Users users={[]} />);
        const child = screen.queryByTestId('does-not-be-element');
        expect(child).not.toBeInTheDocument();
    })

    test('if props.users.length is greater than 0, render Users Component', () => {
        render(
            <Users users={[
                { userName: 'changju', age: 20 },
                { userName: 'yunsung', age: 35 },
                { userName: 'sunyong', age: 19 },
                { userName: 'donald', age: 49 }
            ]}/>
        );
        const contentElement = screen.queryByTestId('user-list');
        expect(contentElement).toBeInTheDocument();
    })
})