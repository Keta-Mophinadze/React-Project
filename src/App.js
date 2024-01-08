import AppRouter from "./AppRouter";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
