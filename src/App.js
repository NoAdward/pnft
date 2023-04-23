import "./App.scss";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import mainLOgo from "./assets/bg.png"
import Login from "./component/Login/Login";


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header></Header>
        <Login />
        <Footer></Footer>
      </div>
      <div className="image">
        <img src={mainLOgo} alt="bg" />
      </div>
    </div>
  );
}

export default App;
