// import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const BookList = () => {
  return (
    <section className="book-list">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      className="book-image"
      src="https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg"
      alt=""
    ></img>
  );
};

function Title() {
  return <h2>i love you to the moon and back</h2>;
}

function Author() {
  return <h3>Adela Martínez </h3>;
}

ReactDOM.render(<BookList />, document.getElementById("root"));
