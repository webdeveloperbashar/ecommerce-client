import React from 'react';
import FeaturedProduct from '../../util/HomePageSection/FeaturedProduct';
import HeroSection from '../../util/HomePageSection/HeroSection';
import Policy from '../../util/HomePageSection/SitePolicy';
const Index = () => {
    return (
        <div>
            <HeroSection/>
            <Policy/>
            <FeaturedProduct/>
        </div>
    );
};

export default Index;