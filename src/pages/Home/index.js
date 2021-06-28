import React from 'react';
import BestSellingProduct from '../../util/HomePageSection/BestSellingProduct';
import FeaturedProduct from '../../util/HomePageSection/FeaturedProduct';
import HeroSection from '../../util/HomePageSection/HeroSection';
import Policy from '../../util/HomePageSection/SitePolicy';
const Index = () => {
    return (
        <div>
            <HeroSection/>
            <Policy/>
            <FeaturedProduct/>
            <BestSellingProduct/>
        </div>
    );
};

export default Index;