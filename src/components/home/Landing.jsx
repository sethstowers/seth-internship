import React, { useEffect } from "react";
import NFT from "../../images/nft.png";
import backgroundImage from "../../images/bg-shape-1.jpg";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';

const Landing = () => {

  useEffect(() => {
    Aos.init();
    // From main! Do not remove
  })
  return (
    <section
      id="section-hero"
      aria-label="section"
      className="no-top no-bottom vh-100"
      data-bgimage="url(images/bg-shape-1.jpg) bottom"
      style={{ background: `url(${backgroundImage}) bottom / cover` }}
    >
      <div className="v-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6" >
              <div className="spacer-single"></div>
              <h6>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000"><span className="text-uppercase id-color-2">
                  Ultraverse Market
                  
                </span></div>
              </h6>
              <div className="spacer-10"></div>
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000"><h1>Create, sell or collect digital items.</h1></div>
              <p className="lead" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                Unit of data stored on a digital ledger, called a blockchain,
                that certifies a digital asset to be unique and therefore not
                interchangeable
              </p>
              <div className="spacer-10"></div>
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
              <Link className="btn-main lead" to="/explore" >
                Explore
              </Link>
              </div>
              <div className="mb-sm-30"></div>
            </div>
          
            <div className="col-md-6 xs-hide" data-aos="fade" data-aos-duration="2500" data-aos-delay="1500">
              <img src={NFT} className="lazy img-fluid" alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
