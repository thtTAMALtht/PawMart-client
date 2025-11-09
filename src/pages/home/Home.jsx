import React from 'react';
import Banner from '../../components/banner/Banner';
import WhyAdopt from '../../components/whyAdopt/WhyAdopt';
import PetHeroes from '../../components/petHeroes/PetHeroes';

const Home = () => {
    return (
        <div className='bg-[#f9f9f9]'>
            <Banner></Banner>
            <WhyAdopt></WhyAdopt>
            <PetHeroes></PetHeroes>
        </div>
    );
};

export default Home;