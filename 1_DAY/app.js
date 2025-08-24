import React from "react";
import ReactDom from "react-dom/client";



const element = React.createElement(
    'h1',
    { style: { backgroundColor: "blue", fontSize: "30px", color: "white", padding: "10px" } },
    "Hello Coder Army"
  );

  const root = ReactDom.createRoot(document.getElementById('root'));
  root.render(element);





// const React = {
//     createElement: function (tag, styles, childen) {
//         const element = document.createElement(tag);
//         element.innerHTML = childen;
//         for (let key in styles) {
//             element.style[key] = styles[key];
//         }
//         return element;
//     }
    

// }


// const ReactDom = {
//  render: function(childen,root){
//     console.log(root);
//     root.append(childen);
// }
// };

// const element = React.createElement('h1',{backgroundColor:"blue", fontSize:"30px", color:"white"},"Hello Coder Army");
// console.log(element);

// const append = ReactDom.render(element, document.getElementById('root'));




// const header1 = document.createElement('h2');
// header1.innerHTML = "Hello Coder Army";
// header1.style.backgroundColor = "blue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";

// const header2 = document.createElement('ul');
// header2.style.backgroundColor = "red";
// header2.style.fontSize = "50px";
// header2.style.color = "white";

// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');
// li1.innerHTML = "HTML";
// li2.innerHTML = "CSS";
// li3.innerHTML = "JS";

// header2.append(li1, li2, li3);

// const root = document.getElementById('root');

// root.append(header1);
// root.append(header2);