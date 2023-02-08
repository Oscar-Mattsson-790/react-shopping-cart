import "./App.css";
import { useState } from "react";
import Product from "./components/Product/Product";
import Header from "./components/Header/Header";
import ProductItem from "./views/ProductItem";

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

function App() {
  const [counter, setCounter] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);

  function handleClick(book) {
    let isAlreadySelected = false;
    selectedProducts.forEach((product) => {
      if (product.id === book.id) {
        isAlreadySelected = true;
      }
    });

    if (isAlreadySelected) {
      return;
    }

    // const checkIfBookIsAlreadySelected = selectedProducts.filter(
    //   (selectedBook) => selectedBook.id === book.id
    // );

    // if (checkIfBookIsAlreadySelected.length > 0) {
    //   return;
    // }

    setCounter((prevCount) => prevCount + 1);
    setSelectedProducts((prevSelectedProducts) => [
      ...prevSelectedProducts,
      book,
    ]);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Header counter={counter} selectedProducts={selectedProducts} />
        {books.map((book, key) => (
          <Product
            title={book.title}
            author={book.author}
            text={book.text}
            handleClick={() => handleClick(book)}
            key={key}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
