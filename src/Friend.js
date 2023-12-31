import Button from "./Button";

// child of FriendList - loading list of friend.

export default function Friend({ friend, onShowBill }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}/-
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}/-
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onShowBill(friend.id)}>Select</Button>
    </li>
  );
}
