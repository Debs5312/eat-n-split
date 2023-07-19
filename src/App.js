import { useState } from "react";
import FriendList from "./FriendList";
import AddFriends from "./AddFriends";
import SplitBill from "./SplitBill";
import Button from "./Button";

const initialFriends = [
  {
    id: "118836",
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: "933372",
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: "499476",
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendList, setFriendList] = useState(initialFriends);
  const [showBill, setShowBill] = useState(false);
  const [usrid, setUsrid] = useState("");

  // const frndname = ;

  function handleADDFriend() {
    setShowAddFriend((show) => !show);
  }
  function handleBillShow(id) {
    if (usrid === id) {
      setShowBill((show) => !show);
    } else {
      setUsrid(id);
      setShowBill(true);
    }
  }

  function handleBalance(id, value) {
    setFriendList((friends) =>
      friends.map((friend) =>
        friend.id === id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  function handleAddAction(friend) {
    setFriendList((friends) => [...friends, friend]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friendList} onShowBill={handleBillShow} />
        {showAddFriend && <AddFriends onAddFriendAction={handleAddAction} />}
        <Button onClick={handleADDFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {showBill && (
        <SplitBill
          onChangebalance={handleBalance}
          usrid={usrid}
          name={friendList.filter((friend) => friend.id === usrid)[0].name}
        />
      )}
    </div>
  );
}
