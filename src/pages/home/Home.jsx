import React from 'react';
import Banner from '../../components/banner/Banner';
import WhyAdopt from '../../components/whyAdopt/WhyAdopt';
import PetHeroes from '../../components/petHeroes/PetHeroes';
import CategoryCards from '../categoryCards/CategoryCards';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryCards></CategoryCards>
            <WhyAdopt></WhyAdopt>
            <PetHeroes></PetHeroes>
        </div>
    );
};

export default Home;