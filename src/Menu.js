import React from "react";

const Menu = props => {
  return props.menu.map(menuObj => (
    <li
      key={menuObj.id}
      onClick={event => {
        props.handleItemOrder(menuObj.id, event);
      }}
    >
      {menuObj.name}, {menuObj.quantity}
    </li>
  ));
};

export default Menu;
