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

export default Book;