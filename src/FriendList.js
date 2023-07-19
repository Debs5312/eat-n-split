import Friend from "./Friend";

//child of APP - Component 1
export default function FriendList({ friends, onShowBill }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} onShowBill={onShowBill} />
      ))}
    </ul>
  );
}
