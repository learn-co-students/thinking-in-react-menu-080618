import React, { Component } from "react";
import AddNewItem from "./AddItem";
import "./App.css";
import Menu from "./Menu";

let itemId = 2;

const createItem = name => ({
  id: ++itemId,
  name: name,
  quantity: 10
});

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        name: "Pizza",
        quantity: 10
      },
      {
        id: 2,
        name: "Carbonara",
        quantity: 10
      }
    ],
    newItemName: ""
  };

  handleItemOrder = (itemId, event) => {
    //const thatThing = this;
    const orderItem = itemObj => {
      if (itemObj.id === itemId) {
        if (itemObj.quantity === 0) {
          console.log("We are sold out");
          return itemObj;
        } else {
          return {
            ...itemObj,
            quantity: itemObj.quantity - 1
          };
        }
      } else {
        return itemObj;
      }
    };
    //debugger;
    const items = this.state.items.map(orderItem);
    //debugger;
    this.setState({
      items // this is the same as items:items
    });
  };

  handleNewItemAddition = event => {
    event.preventDefault();
    const newMenuItem = createItem(this.state.newItemName);
    this.setState({
      items: [...this.state.items, newMenuItem],
      newItemName: ""
    });
  };

  handleNewItemInput = event => {
    this.setState({
      newItemName: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <AddNewItem
          newItemName={this.state.newItemName}
          handleNewItemAddition={this.handleNewItemAddition}
          handleNewItemInput={this.handleNewItemInput}
        />
        <Menu handleItemOrder={this.handleItemOrder} menu={this.state.items} />
      </React.Fragment>
    );
  }
}

export default App;
