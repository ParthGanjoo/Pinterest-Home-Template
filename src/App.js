import './App.css';
import Header from './Components/Header';
import MidText from './Components/MidText'
import Pin from "./Components/Pin";
import Data from "./Components/Data";
import Footer from "./Components/Footer"


function App() {
  return (
    <div className="App">
      <Header/>
      <MidText/>
      <main>
      <div className="mainContainer">
          {Data &&
            Data.map((data) => (
              <Pin
                key={data.id}
                pinSize={data.size}
                imgSrc={data.imgSrc}
                name={data.name}
                link={data.link}
              />
            ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
