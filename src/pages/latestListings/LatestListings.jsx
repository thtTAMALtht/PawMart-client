import React, { use } from "react";
import Container from "../../components/container/Container";
import LatestListingsCard from "../latestListingsCard/LatestListingsCard";

const LatestListings = ({ latestListingsPromise }) => {
  const latestListings = use(latestListingsPromise);
  return (
    <Container>
      <div>
        <h3 className="text-5xl font-bold text-center text-primary mb-16">
          Latest Listings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestListings.map((latest) => (
            <LatestListingsCard
              key={latest._id}
              latest={latest}
            ></LatestListingsCard>
          ))}
        </div>
        <div className="text-center">
          <button className="mt-12 bg-[#4388C9] text-white btn btn-lg rounded-lg font-semibold hover:bg-[#dd6c20] hover:shadow-lg transition-all duration-300 cursor-pointer">
            See More Listings
          </button>
        </div>
      </div>
    </Container>
  );
};

export default LatestListings;
