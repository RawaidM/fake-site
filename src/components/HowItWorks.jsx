import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-gray-200 w-full flex flex-col justify-center items-center mt-1 pt-2">
      <span className="text-xl sm:text-2xl text-orange-700 font-semibold tracking-widest mb-5">
        How It Works?
      </span>
      <div className="flex flex-col sm:flex-row justify-around items-center text-center mb-2">
        <div className="bg-gray-100 w-9/12 sm:w-3/12 mb-7 sm:mt-4 sm:mb-12 rounded-t">
          <img
            src="https://images.unsplash.com/photo-1665686304129-a6e2d16923e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="rounded-t shadow-xl"
          />
          <h1 className="font-sans font-semibold text-xl tracking-wider my-2 sm:my-3">
            Specify Your Request
          </h1>
          <p className="font-serif text-sm tracking-tight text-gray-700 mb-3">
            Answer some special questions about your request.
            <br></br>
            We will send your request to our professionals.
          </p>
        </div>
        <div className="bg-gray-100 w-9/12 sm:w-3/12 mb-7 sm:mt-4 sm:mb-12 rounded-t">
          <img
            src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="rounded-t shadow-xl"
          />
          <h1 className="font-sans font-semibold text-xl tracking-wider my-2 sm:my-3">
            Get Price Offers
          </h1>
          <p className="font-serif text-sm tracking-tight text-gray-700 mb-3">
            Get special offers for your request from professionals.
            <br></br>
            You can chat with them before you pay.
          </p>
        </div>
        <div className="bg-gray-100 w-9/12 sm:w-3/12 mb-7 sm:mt-4 sm:mb-12 rounded-t">
          <img
            src="https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
            alt=""
            className="rounded-t shadow-xl"
          />
          <h1 className="font-sans font-semibold text-xl tracking-wider my-2 sm:my-3">
            Choose The Best Offer
          </h1>
          <p className="font-serif text-sm tracking-tight text-gray-700 mb-3">
            Compare offers.
            <br></br>
            Choose perfect price and quality for your request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
