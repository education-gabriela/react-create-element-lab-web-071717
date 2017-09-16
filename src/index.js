import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

const interests = ["JavaScript", "React", "Movies", "Ice cream"];
const items = interests.map(interest => React.createElement("li", {}, interest));

const meInReact = React.createElement("div", {className: "me"},
    [
      React.createElement("h1", {}, "An Awesome Person"),
      React.createElement("p", {}, "Who is learning React"),
      React.createElement("ul", {className: "my-interests"}, items)
    ]
  );


ReactDOM.render(
  meInReact, 
  document.getElementById('root')
);

export default meInReact
