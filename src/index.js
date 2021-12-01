import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const booksArray = [
  {
    title: "I love you to the moon and back",
    img: "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg",
    author: "Adela Martínez",
  },
  {
    title: "pretty little title",
    img: "https://images-na.ssl-images-amazon.com/images/I/911rEvApjvL._AC_UL200_SR200,200_.jpg",
    author: "Walter Wallace",
  },
  {
    title: "How to catch a dinosaur",
    img: "https://images-na.ssl-images-amazon.com/images/I/81hkdra5HWL._AC_UL200_SR200,200_.jpg",
    author: "John Voight",
  },
];

const BookList = () => {
  return (
    <section className="book-list">
      {booksArray.map((book, index) => {
        return <Book key={index} book={book} />;
      })}
      {booksArray.map((bookItem, index) => {
        return <MyComponent key={index} {...bookItem} />;
      })}
    </section>
  );
};

// const Book = (props) => {
//   return (
//     <article className="book">
//       <img className="book-image" src={props.img} alt={props.title}></img>
//       <h2>{props.title}</h2>
//       <h3>{props.author}</h3>
//     </article>
//   );
// };
const Adorno = () => {
  return <h1>****</h1>;
};

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img className="book-image" src={img} alt={title}></img>
      <Adorno />
      {props.children}
      <h2>{title.toUpperCase()}</h2>
      <h3 style={{ color: "green", fontSize: "12px" }}>{author}</h3>
    </article>
  );
};

//code

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    const { img, title, author } = props;
    this.title = title;
    this.img = img;
    this.author = author;
  }
  render() {
    const { img, title, author } = this.props;

    return (
      <article className="book">
        <img className="book-image" src={img} alt={title}></img>
        <Adorno />

        <h2>{title.toUpperCase()}</h2>
        <h3 style={{ color: "green", fontSize: "12px" }}>{author}</h3>
      </article>
    );
  }
}

ReactDOM.render(<BookList />, document.getElementById("root"));
