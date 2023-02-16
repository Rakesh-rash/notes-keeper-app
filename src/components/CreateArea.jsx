import React from "react";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [InputItem, setInput] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function ClickChange(event) {
    props.Click(InputItem);
    setInput({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={InputItem.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={InputItem.content}
        />
        <button onClick={ClickChange}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
