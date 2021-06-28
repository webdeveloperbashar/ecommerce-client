import React from 'react';
import BestSellingProduct from '../../util/HomePageSection/BestSellingProduct';
import HeroSection from '../../util/HomePageSection/HeroSection';
import HotProduct from '../../util/HomePageSection/HotProduct';
import PopularProduct from '../../util/HomePageSection/PopularProduct';
import SiteFeatures from '../../util/HomePageSection/SiteFeatures';
import Policy from '../../util/HomePageSection/SitePolicy';
import TopRatedProduct from '../../util/HomePageSection/TopRatedProduct';
const Index = () => {
    return (
        <div>
            <HeroSection/>
            <Policy/>
            <HotProduct/>
            <BestSellingProduct/>
            <SiteFeatures/>
            <PopularProduct/>
            <TopRatedProduct/>
        </div>
    );
};

export default Index;