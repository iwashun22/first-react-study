import React from 'react';
import ReactDom from 'react-dom';

function FirstHeader() {
   return (
      <h2>This is my first lesson of React</h2>
   );
}

ReactDom.render(<FirstHeader />, document.getElementById('root'));