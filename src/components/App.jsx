import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Item, SetItem] = useState([]);

  function MakeChange(note) {
    SetItem((prev) => {
      return [...prev, note];
    });
  }
  function DeleteItem(id) {
    SetItem((previtem) => {
      return previtem.filter((nodeitem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea Click={MakeChange} />
      {Item.map((itemnode, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={itemnode.title}
            content={itemnode.content}
            Delete={DeleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
