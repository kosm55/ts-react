import {IUser} from "../../interfaces";
import {FC} from "react";

interface IProps{
    userDetails: IUser
}
const UserDetails:FC <IProps> = ({userDetails}) => {
    const {id, name, username, email} = userDetails;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {UserDetails};