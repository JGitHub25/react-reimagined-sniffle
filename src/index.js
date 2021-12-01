import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const BookList = () => {
  return (
    <section className="book-list">
      <Book
        title="I love you to the moon and back"
        img="https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg"
        author="Adela Martínez"
      />
      <MyComponent
        title="pretty little title"
        img="https://images-na.ssl-images-amazon.com/images/I/911rEvApjvL._AC_UL200_SR200,200_.jpg"
        author="Walter Wallace"
      >
        <MyComponent />
        <div>hola amigo</div>
      </MyComponent>
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

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img className="book-image" src={img} alt={title}></img>
      <h2>{title.toUpperCase()}</h2>
      <h3 style={{ color: "green", fontSize: "12px" }}>{author}</h3>
    </article>
  );
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    const { img, title, author } = props;
    this.title = title;
    this.img = img;
    this.author = author;
  }
  render() {
    console.log(this.props);
    console.log(this.props.children);

    const { img, title, author } = this.props;

    return (
      <article className="book">
        <img className="book-image" src={img} alt={title}></img>
        <h2>{title.toUpperCase()}</h2>
        {this.props.children}
        <h3 style={{ color: "green", fontSize: "12px" }}>{author}</h3>
      </article>
    );
  }
}

ReactDOM.render(<BookList />, document.getElementById("root"));
