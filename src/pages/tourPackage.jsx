import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import Card from "../components/bodyCards";
import Footer from "../components/footer";
function TourPackage() {
  return (
    <>
      <Banner />
      <NavBar />

      <section className="pex">
      <div className="bex">
        <h1>Tour Package</h1>
        <div className="ot">
          <a href="" className="o">
            Home
          </a>
          <a href="" className="t">
            <span> ▶</span> Tour Package
          </a>
        </div>
      </div>
      </section>
      <section className="g">
          <h2>Choose your Package</h2>
          <h1>Select your Best Package for your Travel</h1>
      </section>

      <>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </>

      <Footer />
    </>
  );
}

export default TourPackage;
