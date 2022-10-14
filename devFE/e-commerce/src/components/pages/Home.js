import React from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import { SliderData } from '../ImageSlider/SliderData';

const Home = () => {
  return (
    <ImageSlider slides={SliderData} />
  );
};

export default Home;