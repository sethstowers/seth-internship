import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HotCollections = () => {
  const [hotCollections, setHotCollections] = useState([]);

  const settings = { 
    loop: true,
    nav: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 4
      },
    }
  }

  const getHotCollectionInfo = async () => {
    const response = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections');
    setHotCollections(response.data)
  }

  useEffect(() => {
    getHotCollectionInfo();
  }, [])

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
    <OwlCarousel {...settings}>
          {hotCollections.map((collection, index) => (
              <div className="nft_coll" key={index} >
                <div className="nft_wrap">
                  <Link to="/item-details">
                    <img src={collection.nftImage} className="lazy img-fluid" alt="" />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                    <img className="lazy pp-coll" src={collection.authorImage} alt="" />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>{collection.title}</h4>
                  </Link>
                  <span>ERC-{collection.code}</span>
                </div>
            </div>
          ))}
          </OwlCarousel>

        </div>
      </div>
    </section>
  );
};

export default HotCollections;
