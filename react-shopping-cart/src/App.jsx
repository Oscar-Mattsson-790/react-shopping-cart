import "./App.css";
import Product from "./components/Product/Product";
import Header from "./components/Header/Header";

function App() {
  const books = [
    {
      id: 0,
      title: "A Sign of Four",
      author: "Av Sir Arthur Conan Doyle",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum voluptatem eligendi quidem nostrum suscipit magnam delectus quam totam consequatur, unde corporis iure facilis laudantium. Expedita consequatur aliquam quod autem.",
    },
    {
      id: 1,
      title: "A Study in Scarlet",
      author: "Av Sir Arthur Conan Doyle",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum voluptatem eligendi quidem nostrum suscipit magnam delectus quam totam consequatur, unde corporis iure facilis laudantium. Expedita consequatur aliquam quod autem.",
    },
    {
      id: 2,
      title: "Baskervilles Hound",
      author: "Av Sir Arthur Conan Doyle",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum voluptatem eligendi quidem nostrum suscipit magnam delectus quam totam consequatur, unde corporis iure facilis laudantium. Expedita consequatur aliquam quod autem.",
    },
    {
      id: 3,
      title: "The Adventures of Sherlock Holmes",
      author: "Av Sir Arthur Conan Doyle",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum voluptatem eligendi quidem nostrum suscipit magnam delectus quam totam consequatur, unde corporis iure facilis laudantium. Expedita consequatur aliquam quod autem.",
    },
  ];

  const booksComponents = books.map((book) => {
    return (
      <Product
        title={book.title}
        author={book.author}
        text={book.text}
        key={book.id}
      />
    );
  });

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        {booksComponents}
      </div>
    </div>
  );
}

export default App;
