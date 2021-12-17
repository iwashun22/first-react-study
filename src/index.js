import { logDOM } from "@testing-library/dom";
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
   return <h3>by Shun Iwashita</h3>
}

const Booklist = () => {
   return (
     <section className="booklist">
       <Book
         img="https://m.media-amazon.com/images/I/81YHHiNPDNL._AC_UL640_QL65_.jpg"
         title="Tales of Life and Music"
         author="Dave Grohl"
       />
       <Book
         img="https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL381_SR381,381_.jpg"
         title="Will"
         author="Will Smith"
       />
       <Book
         img="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL127_SR127,127_.jpg"
         title="I Love You to the Moon and Back"
         author="Amelia Hepworth"
       />
       <Book
         img="https://images-na.ssl-images-amazon.com/images/I/51Ua3JTN8iS._SX338_BO1,204,203,200_.jpg"
         title="Big Shot Diary of a Wimpy Kid"
         author="Jeff Kinney"
       />
       <Book
         img="https://m.media-amazon.com/images/I/91S+nNHdHSL._AC_UY436_FMwebp_QL65_.jpg"
         title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
         author="James Clear"
       />
       <Book
         img="https://m.media-amazon.com/images/I/51DZeZw7K0L.jpg"
         title="Greenlight"
         author="Matthew McConaughey"
       />
       <Book
         img="https://images-na.ssl-images-amazon.com/images/I/41lpkXqV+PL._SX418_BO1,204,203,200_.jpg"
         title="History of the World Map by Map"
         author="DK"
       />
       <Book
         img="https://images-na.ssl-images-amazon.com/images/I/51wSvLJG-rS._SX306_BO1,204,203,200_.jpg"
         title="Astrophysics for People in a Hurry"
         author="Neil deGrasse Tyson"
       />
       <Book
         img="https://images-na.ssl-images-amazon.com/images/I/61DTOTemyDL._SX330_BO1,204,203,200_.jpg"
         title="Underland: A Deep Time Journey"
         author="Robert Macfarlane"
       />
     </section>
   );
}

const Book = props => {
   // console.log(props);
   return (
      <article className="book">
         <Image img={props.img}/>
         <Title title={props.title}/>
         <Author author={props.author}/>
      </article>
   );
}

const Image = props => <img src={props.img} href="book image" height="223px" className="bookimage"/>;

const Title = props => <h4>{props.title}</h4>;

const Author = props => <p style={{ letterSpacing: "5px" }}>{props.author}</p>;

ReactDom.render(<Greeting />, document.getElementById("root"));