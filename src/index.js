import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const food = [
  { title: "Hamburger", price: "1000$" },
  { title: "Sandwich", price: "2000$" },
];
const FoodList = () => {
  return (
    <div className="wrapper">
      {food.map((food) => (
        <div>
          <div className="uppercase">title: {food.title}</div>
          <div className="uppercase">price: {food.price}</div>
        </div>
      ))}
    </div>
  );
};

const MessageComponent = (props) => {
  console.log("props:", props);
  return (
    <div>
      <h1>{props.title}</h1>
      <FoodList title="food from god" />
    </div>
  );
};

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, Food</h1>
        <FoodList title="food for me" />
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <MessageComponent title="TestWord" />
      <ClassComponent />
    </div>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
