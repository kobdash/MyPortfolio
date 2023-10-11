import React from 'react';
import Greeting from './Greeting';
import CarouselSlider from './CarouselSlider';
import SlideData from './SlideData';


function HomePage() {
  return (
    <div>

     
      
      
<Greeting />
        
       
        {<CarouselSlider slides={SlideData} />}
      
    </div>
  );
}

export default HomePage;