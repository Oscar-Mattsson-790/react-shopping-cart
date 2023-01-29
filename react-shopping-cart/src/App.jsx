import "./App.css";
import Product from "./components/Product/Product";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="card-wrapper">
        <Header />
        <Product
          title="A Sign of Four"
          author="Av Sir Arthur Conan Doyle"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        dolorum voluptatem eligendi quidem nostrum suscipit magnam delectus quam
        totam consequatur, unde corporis iure facilis laudantium. Expedita
        consequatur aliquam quod autem."
        />
        <Product
          title="A Study in Scarlet"
          author="Av Sir Arthur Conan Doyle"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        dolorum voluptatem eligendi quidem nostrum suscipit magnam delectus quam
        totam consequatur, unde corporis iure facilis laudantium. Expedita
        consequatur aliquam quod autem."
        />
        <Product
          title="Baskervilles Hound"
          author="Av Sir Arthur Conan Doyle"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        dolorum voluptatem eligendi quidem nostrum suscipit magnam delectus quam
        totam consequatur, unde corporis iure facilis laudantium. Expedita
        consequatur aliquam quod autem."
        />
        <Product
          title="The Adventures of Sherlock Holmes"
          author="Av Sir Arthur Conan Doyle"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        dolorum voluptatem eligendi quidem nostrum suscipit magnam delectus quam
        totam consequatur, unde corporis iure facilis laudantium. Expedita
        consequatur aliquam quod autem."
        />
      </div>
    </div>
  );
}

export default App;
