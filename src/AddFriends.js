import { useState } from "react";
import Button from "./Button";

//Add Friends by a form
//Child Component of APP (component 2)
export default function AddFriends({ onAddFriendAction }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const friend = {
      id,
      name: `${name}`,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriendAction(friend);

    setName("");
    setImage("https://i.pravatar.cc/48?");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="frnd">👩🏻‍🤝‍🧑🏼 Friend Name</label>
      <input
        type="text"
        id="frnd"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="img">🌞Image URL</label>
      <input type="text" id="img" value={image} disabled />

      <Button>ADD</Button>
    </form>
  );
}
