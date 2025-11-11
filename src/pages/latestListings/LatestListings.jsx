import React, { use } from "react";
import Container from "../../components/container/Container";
import LatestListingsCard from "../latestListingsCard/LatestListingsCard";
import { Link } from "react-router";

const LatestListings = ({ latestListingsPromise }) => {
  const latestListings = use(latestListingsPromise);
  return (
    <Container>
      <div>
        <h3 className="text-2xl md:text-5xl font-bold text-center text-primary mb-6">
          Latest Listings
        </h3>
        <p className="max-w-3xl mx-auto text-center text-sm md:text-lg text-gray-400 mb-12">
          Freshly added pets & essential goodies—waiting just for you! Discover
          lovable companions & smart pet essentials, updated daily to help you
          find exactly what your furry friend needs.
        </p>
        {latestListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestListings.map((latest) => (
              <LatestListingsCard
                key={latest._id}
                latest={latest}
              ></LatestListingsCard>
            ))}
          </div>
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">
            Not Available !!!
          </p>
        )}
        <div className="text-center">
          <Link
            to="/pets-supplies"
            className="mt-12 bg-[#4388C9] text-white rounded-lg font-semibold hover:bg-[#dd6c20] hover:shadow-lg transition-all duration-300 cursor-pointer  btn btn-md"
          >
            See More Listings
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default LatestListings;
