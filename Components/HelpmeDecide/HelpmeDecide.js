import React from 'react';

const HelpmeDecide = () => {
    return (
      <div className="flex lg:flex-row flex-col justify-between items-center lg:w-4/5 lg:mx-auto py-[80px] mx-6">
        <div className="lg:w-1/2">
          <h2 className="capitalize text-3xl lg:text-5xl font-bold lg:leading-[60px]">
            what if your decision didn`&apos;`t have to feel like a total <br />{" "}
            leap of faith?
          </h2>
          <p className="capitalize text-slate-400 mt-3 text-xl">
            work with the team that cares about out
          </p>
          <p className="capitalize text-slate-400 my-2 text-xl">
            {" "}
            customers as much as our code.
          </p>
          <p className="capitalize text-sm block text-slate-400">
            (and we`&apos;`re perfectionist with our code.)
          </p>
          <button className="mt-12 btn btn-sm btn-outline btn-primary border-2">
            Get startted
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:ml-24 items-center">
          <img
            className="w-3/2 h-2/3"
            src="https://i.ibb.co/k0gS3xf/logo-1-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    );
};

export default HelpmeDecide;