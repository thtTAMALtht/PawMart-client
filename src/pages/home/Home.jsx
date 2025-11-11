import React from "react";
import Banner from "../../components/banner/Banner";
import WhyAdopt from "../../components/whyAdopt/WhyAdopt";
import PetHeroes from "../../components/petHeroes/PetHeroes";
import CategoryCards from "../categoryCards/CategoryCards";
import LatestListings from "../latestListings/LatestListings";

const latestListingsPromise = fetch('https://paw-mart-server-sigma.vercel.app/latest-listings').then(res => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryCards></CategoryCards>
      <LatestListings latestListingsPromise={latestListingsPromise}></LatestListings>
      <WhyAdopt></WhyAdopt>
      <PetHeroes></PetHeroes>
    </div>
  );
};

export default Home;
