import React from 'react';

const Conditions = () => {
  return (
    <div className="min-h-screen  py-12 px-6 md:px-20 lg:px-40">
      <title>PawMart | Terms & Conditions</title>
      <div className="max-w-5xl mx-auto bg-white border border-gray-100 shadow-md rounded-lg p-8">
        <h1 className="text-4xl text-center font-bold text-[#4388C9] mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Welcome to PawMart! By accessing or using our platform, you agree to the following terms and conditions. 
          Please read them carefully before using our services.
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-[#4388C9] mb-2">
              1. General Overview
            </h2>
            <p>
              PawMart is a community-driven platform connecting pet owners, breeders, and pet shops 
              with potential adopters and buyers. Our goal is to create a safe and friendly space 
              for buying, selling, or adopting pets and pet-related products.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-[#4388C9] mb-2">
              2. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Users must provide accurate and up-to-date information in all listings.</li>
              <li>All pets listed for adoption or sale must comply with local animal welfare laws.</li>
              <li>Users must communicate respectfully and report any suspicious or fraudulent activity.</li>
              <li>PawMart reserves the right to remove listings that violate these conditions.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-[#4388C9] mb-2">
              3. Transactions & Payments
            </h2>
            <p>
              PawMart acts only as a connecting platform and is not responsible for 
              payments or disputes arising between buyers, sellers, or adopters. 
              Users should exercise caution and ensure all transactions are transparent and secure.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-[#4388C9] mb-2">
              4. Content & Listings
            </h2>
            <p>
              Users are solely responsible for the accuracy, legality, and appropriateness 
              of the content they post. PawMart reserves the right to edit, remove, or block 
              listings that breach our community standards or legal requirements.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-[#4388C9] mb-2">
              5. Liability Disclaimer
            </h2>
            <p>
              PawMart is not liable for any damages, losses, or issues that occur as a result 
              of interactions or transactions between users. The platform provides listings 
              for informational purposes only and does not guarantee the health, quality, or 
              authenticity of listed pets or products.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-[#4388C9] mb-2">
              6. Updates to Terms
            </h2>
            <p>
              PawMart may update these Terms & Conditions from time to time. Continued use of 
              the platform after updates means you accept the revised terms.
            </p>
          </section>
        </div>

        <p className="text-gray-600 mt-12 text-center text-sm">
          Last updated: November 2025
        </p>
      </div>
    </div>
  );
};

export default Conditions;
