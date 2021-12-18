import React from "react";
import ReactDom from "react-dom";
import books from "./books";
import Book from "./Book.jsx";

// CSS
import './index.css';

// JSX Rules
// The function name must start with capital letter
// return single element
// div / section / article / Fragment
// use camelCase for html attributes
// className, not class
// close every element

function Document() {
  return (
    <React.Fragment>
      <h1 className="intro">Hello world</h1>
      <Person />
      {/* you can set the style by addign two curly braces 
         the first bracket is to tell the computer that its inside is javaScript
      */}
      <h2 style={ {
            padding: '10px 0',
            fontFamily: `'Courier New', Courier, monospace`
         } }>
         This is my first lesson of React
      </h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ipsam temporibus earum neque doloribus, eveniet quasi, cumque voluptatum ullam adipisci perferendis. Asperiores eos optio cumque fuga ducimus sed sequi doloremque!</p>

      <Booklist /> 
    </React.Fragment>
    // You can't put second element. Try to uncomment the code below and you will see the error.
    // <div></div>
    // You should wrap the code by React Fragment so there will be not too many div in your code
  );
}

/////// this function is same as the function above
// const Greeting = () => {
//    return React.createElement(
//       'div', null,
//       React.createElement('h1', null, 'Hello world'),
//       React.createElement('h2', null, 'This is my first lesson of React')
//    );
// }

function Person() {
   return <h3>by Shun</h3>
}

const Booklist = () => {
  return (
    <section className="booklist">
      {/* <Book
         img="https://m.media-amazon.com/images/I/81YHHiNPDNL._AC_UL640_QL65_.jpg"
         title="Tales of Life and Music"
         author="Dave Grohl"
       />
       <Book
         img="https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL381_SR381,381_.jpg"
         title="Will"
         author="Will Smith"
       />

      ...

       This is very long code, especially when you have a hundred of books, so it will be better if I set the books in the array and iterate through it
       */}

      {/* 
         This code is way shorter and  more efficient.
         In React, the string arrays will get concatenate into one string.

         const names = ['John', 'David'];

         {names} ===> 'JohnDavid'
      */}
      {books.map((book) => (
        <Book key={book.id} book={{ ...book }} />
        // This component is from Book.js
      ))}
    </section>
  );
};

ReactDom.render(<Document />, document.getElementById("root"));