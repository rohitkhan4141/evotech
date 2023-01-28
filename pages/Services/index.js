import React from "react";
import { BiBriefcase, BiCabinet, BiCartAlt, BiDonateHeart, BiMeteor, BiRocket } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Services = () => {
  return (
    <div className="lg:py-[80px] lg:w-4/5 lg:mx-auto py-16">
      <div className="lg:w-1/2 lg:mx-auto text-center mb-12 ">
        <h3 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          Services
        </h3>
        <p className="text-xl w-2/3 mx-auto text-slate-400">
          we proudly work with.. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Maiores, culpa?
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 mx-6 mt-4">
        <div className="bg-slate-900 px-6 pb-6 pt-12 rounded-xl ">
          <div className="text-center flex flex-col justify-center items-center ">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-3xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <BiBriefcase className="-rotate-45 shadow-2xl shadow-purple-500"></BiBriefcase>
            </div>
            <h3 className="text-3xl my-3 ">Small Bussiness</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              excepturi, nemo voluptas alias quibusdam minima?
            </p>
          </div>
        </div>
        <div className="bg-slate-900 px-6 pb-6 pt-12 rounded-xl ">
          <div className="text-center flex flex-col justify-center items-center p-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-3xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <BiCartAlt className="-rotate-45 shadow-2xl shadow-purple-500"></BiCartAlt>
            </div>
            <h3 className="text-3xl my-3 ">E-Commerce</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              excepturi, nemo voluptas alias quibusdam minima?
            </p>
          </div>
        </div>
        <div className="bg-slate-900 px-6 pb-6 pt-12 rounded-xl ">
          <div className="text-center flex flex-col justify-center items-center p-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-3xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <FaGraduationCap className="-rotate-45 shadow-2xl shadow-purple-500"></FaGraduationCap>
            </div>
            <h3 className="text-3xl my-3 ">Small Bussiness</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              excepturi, nemo voluptas alias quibusdam minima?
            </p>
          </div>
        </div>
        <div className="bg-slate-900 px-6 pb-6 pt-12 rounded-xl ">
          <div className="text-center flex flex-col justify-center items-center p-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-3xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <BiRocket className="-rotate-45 shadow-2xl shadow-purple-500"></BiRocket>
            </div>
            <h3 className="text-3xl my-3 ">Startups</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              excepturi, nemo voluptas alias quibusdam minima?
            </p>
          </div>
        </div>
        <div className="bg-slate-900 px-6 pb-6 pt-12 rounded-xl ">
          <div className="text-center flex flex-col justify-center items-center p-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-3xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <BiCabinet className="-rotate-45 shadow-2xl shadow-purple-500"></BiCabinet>
            </div>
            <h3 className="text-3xl my-3 ">Enterprise</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              excepturi, nemo voluptas alias quibusdam minima?
            </p>
          </div>
        </div>
        <div className="bg-slate-900 px-6 pb-6 pt-12 rounded-xl ">
          <div className="text-center flex flex-col justify-center items-center p-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-3xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <BiDonateHeart className="-rotate-45 shadow-2xl shadow-purple-500"></BiDonateHeart>
            </div>
            <h3 className="text-3xl my-3 ">Non-Profits</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              excepturi, nemo voluptas alias quibusdam minima?
            </p>
          </div>
        </div>
        <div className="bg-slate-900 px-6 pb-6 pt-12 rounded-xl ">
          <div className="text-center flex flex-col justify-center items-center p-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-3xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <BiMeteor className="-rotate-45 shadow-2xl shadow-purple-500"></BiMeteor>
            </div>
            <h3 className="text-3xl my-3 ">Government</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              excepturi, nemo voluptas alias quibusdam minima?
            </p>
          </div>
        </div>
        <div className="bg-slate-900 px-6 pb-6 pt-12 rounded-xl ">
          <div className="text-center flex flex-col justify-center items-center p-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-3xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <AiOutlineThunderbolt className="-rotate-45 shadow-2xl shadow-purple-500"></AiOutlineThunderbolt>
            </div>
            <h3 className="text-3xl my-3 ">High Risk Industries</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              excepturi, nemo voluptas alias quibusdam minima?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
