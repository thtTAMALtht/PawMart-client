import React from "react";
import { Link } from "react-router";

const LatestListingsCard = ({ latest }) => {
  return (
    <div
      key={latest._id}
      className="card bg-base-100 p-3 shadow-md transition-shadow rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:shadow-[#dd6c20]/10"
    >
      <figure>
        <img
          src={latest.image}
          alt={latest.name}
          className="h-60 w-full object-cover"
        />
      </figure>
      <div className="space-y-3">
        <h3 className="card-title mt-2">Name : {latest.name}</h3>
        <p className="text-sm text-gray-500">{latest.category}</p>
        <p className="text-sm">Location : {latest.location}</p>
        <p className="font-semibold text-lg">
          {latest.category === "Pets" ? "Free Adoption" : `৳${latest.price}`}
        </p>
        <div className="card-actions mt-2">
          <Link
            to={`/pets-supplies-details/${latest._id}`}
            className="btn btn-primary text-white w-full"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestListingsCard;
