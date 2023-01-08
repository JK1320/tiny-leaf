import React from 'react';
import './Home.css';

import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import Reserve from "../../components/reserve/Reserve";
import Footer from "../../components/footer/Footer";

import image1 from '../../images/image1.png';
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import image5 from "../../images/image5.png";
import image6 from "../../images/image6.png";
import image7 from "../../images/image7.png";
import image8 from "../../images/image8.png";




const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero img={image1} text="A flavour for all seasons" />
      <div className="about">
        <section className="about-text">
          <h2>Our blends</h2>
          <p className="about-text-paragraph">
            We make our very own Tiny Leaf blends right here in the tea house,
            offering new flavours according to the season. We source all our
            produce sustainably and make sure the hands that laboured for our
            flavoursome cups were rewarded fairly.
          </p>
          <hr className="horizontal-line" />
          <h2 className="about-text-subheading">Hand-picked and sustainable</h2>
        </section>
        <section className="about-img">
          <img src={image2} alt="" />
        </section>
      </div>
      <div className="wise-leaf-evenings">
        <div className="wise-leaf-text">
          <h2>Wise Leaf evenings</h2>
          <p>
            Bringing together those with curious minds, speakers and observers
            alike, our Wise Leaf events are a melting pot to share, reflect and
            contemplate.
          </p>
        </div>
        <div className="wise-img1">
          <img className="image-one" src={image3} alt="" />
        </div>
        <div className="wise-img2">
          <img className="image-two" src={image4} alt="tea cup" />
        </div>
      </div>
      <Reserve
        img={image5}
        heading="Make a reservation"
        text="For anything from a catchup with a long lost friend to a book club gathering... we’re always ready to put the kettle on."
        button="Reserve a table"
      />
      <div className="gallery">
        <img className="gallery-img" src={image8} alt="" />
        <img className="gallery-img" src={image6} alt="" />
        <img className="gallery-img" src={image7} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;