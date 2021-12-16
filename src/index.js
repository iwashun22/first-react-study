import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css';

// JSX Rules
// The function name must start with capital letter
// return single element
// div / section / article / Fragment
// use camelCase for html attributes
// className, not class
// close every element

function Greeting() {
  return (
    <React.Fragment>
      <h1 className="intro">Hello world</h1>
      <Person />
      <h2>This is my first lesson of React</h2>
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
   return <h3>by Shun Iwashita</h3>
}

const Booklist = () => {
   return (
      <section className="booklist">
         <Book />
         <Book />
         <Book />
         <Book />
         <Book />
         <Book />
         <Book />
         <Book />
         <Book />
      </section>
   );
}

const Book = () => {
   return (
      <article class="book">
         <Image />
         <Title />
         <Author />
      </article>
   );
}

const Image = () => <img src="https://m.media-amazon.com/images/I/81YHHiNPDNL._AC_UL640_QL65_.jpg" href="book image" width="180px" class="bookimage"/>;

const Title = () => <h4>Tales of Life and Music</h4>;

const Author = () => <p>Dave Grohl</p>;

ReactDom.render(<Greeting />, document.getElementById("root"));