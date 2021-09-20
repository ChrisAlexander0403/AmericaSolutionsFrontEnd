import React from 'react';

import Banner from '../components/banner/Banner';
import Enterprises from '../components/enterprises/Enterprises';

// import Slider from '../components/slider/Slider';

const Home = () => {
    return (
        <>
          {/* <Slider/> */}
          <Banner />
          <Enterprises />
        </>
    );
}

export default Home;