// import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const BookList = () => {
  return (
    <section className="book-list">
      <Book />
    </section>
  );
};

const title = "I love you to the moon and back";

const Book = () => {
  return (
    <article className="book">
      <img
        className="book-image"
        src="https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg"
        alt=""
      ></img>
      <h2>{title.toUpperCase()}</h2>
      <h3 style={{ color: "green", fontSize: "12px" }}>Adela Martínez </h3>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
