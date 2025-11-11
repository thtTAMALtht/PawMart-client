import React from 'react';
import { Link } from 'react-router';

const LatestListingsCard = ({latest}) => {
    console.log(latest);
    return (
        <div>
           <div
              key={latest._id}
              className="card bg-base-100 p-3 shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden border border-gray-100"
            >
              <figure>
                <img
                  src={latest.image}
                  alt={latest.name}
                  className="h-60 w-full object-cover"
                />
              </figure>
              <div className="space-y-3">
                <h3 className="card-title">Name : {latest.name}</h3>
                <p className="text-sm text-gray-500">{latest.category}</p>
                <p className="text-sm">Location : {latest.location}</p>
                <p className="font-semibold text-lg">
                  {latest.category === "Pets"
                    ? "Free Adoption"
                    : `৳${latest.price}`}
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
        </div>
    );
};

export default LatestListingsCard;