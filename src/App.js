import Filterbar from "./Components/FIlterbar/Filterbar";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card.jsx"
import ProductLayout from "./ProductLayout/ProductLayout.jsx";

function App() {
  return (
    <div className="App">
      <div className="top-link">
        <button className="borderRemove top-link">
          <p className="pt-3">
            Learn about Great Favourites, the most loved homes on Airbnb
          </p>
        </button>
      </div>
      <Navbar />
      <Filterbar />     
      <ProductLayout/>
      <ProductLayout/>
      <ProductLayout/>


    </div>
  );
}

export default App;
