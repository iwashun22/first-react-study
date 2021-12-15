import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
   return (
      <div>
         <h1>Hello world</h1>
         <h2>This is my first lesson of React</h2>
      </div>
      // You can't put second element. Try to uncomment the code below and you will see the error.
      // <div></div>
   );
}


/////// same as the function above
// const Greeting = () => {
//    return React.createElement(
//       'div', null, 
//       React.createElement('h1', null, 'Hello world'),
//       React.createElement('h2', null, 'This is my first lesson of React')
//    );
// }

ReactDom.render(
   <Greeting />
   , document.getElementById('root')
);