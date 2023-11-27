import { FriendListItem } from "./FriendListItem";

export const FriendList = ({friends}) => (
    <ul className="friend-list">
        {friends.map(friend => (
           <FriendListItem friend = {friend} key = {friend.id}></FriendListItem> 
        ))}
    </ul>
    
)