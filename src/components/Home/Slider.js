import React, { useState, useEffect, useRef } from 'react';
import SlideProductsCSS from '../../style/SlideProducts.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import productsData from '../../products.json';

function SlideProducts() {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const progressBarRef = useRef(null);
  const displayDuration = 3000; // Fotoğrafın ekranda kalma süresi (3 saniye)

  useEffect(() => {
    setProducts(productsData);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % products.length);
      resetProgressBar();
    }, displayDuration);

    return () => {
      clearInterval(timer);
    };
  }, [index, products]);

  const resetProgressBar = () => {
    clearInterval(progressBarRef.current);
    progressBarRef.current.style.transition = 'none';
    progressBarRef.current.style.width = '0%';
    setTimeout(() => {
      progressBarRef.current.style.transition = `width ${displayDuration / 1000}s linear`;
      progressBarRef.current.style.width = '100%';
    }, 50);
  };

  const handleNextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % products.length);
    resetProgressBar();
  };

  const handlePrevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    resetProgressBar();
  };

  return (
    <div className={SlideProductsCSS.slider}>
      {products.length > 0 && (
        <div className={SlideProductsCSS.slide}>
          <ArrowBackIosIcon className={SlideProductsCSS.leftArrow} onClick={handlePrevSlide} />
          <div className={SlideProductsCSS.active}>
            {index >= 0 && index < products.length && (
              <img src={products[index].image} alt={`Product ${index + 1}`} />
            )}
            <div className={SlideProductsCSS.progressContainer}>
              <div
                className={SlideProductsCSS.progressBar}
                ref={progressBarRef}
              />
            </div>
          </div>
          <ArrowForwardIosIcon className={SlideProductsCSS.rightArrow} onClick={handleNextSlide} />
        </div>
      )}
    </div>
  );
}

export default SlideProducts;
