import Header from "../../../components/client/Header";
import Footer from "../../../components/client/Footer";
import "./index.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="home-page">Home Page</div>
      <Footer/>
    </div>
  );
}

export default Home;
