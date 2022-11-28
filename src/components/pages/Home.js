import React from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import { SliderData } from '../ImageSlider/SliderData';
import HeroSection from '../HomePageHero/HeroSection'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './HomeData'

const Home = () => {
  return (
    <>
    <ImageSlider slides={SliderData} />
    <HeroSection {...homeObjOne}/>
    <HeroSection {...homeObjThree}/>
    <HeroSection {...homeObjTwo}/>
    <HeroSection {...homeObjFour}/>
    </> 
  );
}

export default Home;