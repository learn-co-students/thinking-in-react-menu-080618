import React from "react";

const AddNewItem = props => {
  return (
    <form onSubmit={props.handleNewItemAddition}>
      Item name:{" "}
      <input
        onChange={props.handleNewItemInput}
        type="text"
        value={props.newItemName}
      />
    </form>
  );
};

export default AddNewItem;
