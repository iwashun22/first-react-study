import React from 'react';
import books from "./books";

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
      ))}
    </section>
  );
};

// set the parameter for unique property
const Book = (props) => {
  // console.log(props);
  const { img, title, author } = props.book;
  function logAuthor(author) {
    console.log(author);
  }
  return (
    <article className="book">
      <Image img={img} />
      <Title title={title} />
      <Author author={author} />
      {/* add event */}
      <button type="button" onClick={() => logAuthor(author)}>
        click me
      </button>
    </article>
  );
};

const Image = (props) => (
  <img src={props.img} alt="book" height="223px" className="bookimage" />
);

const Title = (props) => <h4>{props.title}</h4>;

const Author = (props) => (
  <p style={{ letterSpacing: "5px" }}>{props.author}</p>
);

export default Booklist;