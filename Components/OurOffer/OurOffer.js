import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import Image from 'next/image';





const OurOffer = () => {


    return (
      <div className="lg:mx-0 mx-6 mb-[80px]">
        <div className="lg:w-3/5 lg:mx-auto pb-12">
          <div>
            <h3 className="text-3xl font-bold">
              You could be <br /> Our next success Story
            </h3>
            <p className="text-slate-400 capitalize">
              join our (growing) list of clients who have seen results.
            </p>
          </div>
        </div>
        <div >
          <div >
            <Splide 
              id="splide"
              hasTrack={false}
              aria-label="..."
              options={{
                perPage: 1,
                rewind: true,
                padding: "15rem",
                height: "40rem",
                gap: "3rem",
                breakpoints: {
                  1200: {height:'40rem', perPage: 1, padding: "15rem", gap: "1rem" },
                  767: { height: "800", perPage: 1, padding: 0, gap: "1rem" },
                  575: { height: "100%", perPage: 1, padding: 0, gap: "1rem" },
                },
              }}
            >
              <SplideTrack>
                <SplideSlide>
                  <div>
                    <Image
                      className="h-full rounded-lg"
                      src="https://images.pexels.com/photos/5839461/pexels-photo-5839461.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Image
                      className="h-full rounded-lg"
                      src="https://images.pexels.com/photos/5839461/pexels-photo-5839461.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Image
                      className="h-full rounded-lg"
                      src="https://images.pexels.com/photos/5839461/pexels-photo-5839461.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Image
                      className="h-full rounded-lg"
                      src="https://images.pexels.com/photos/5839461/pexels-photo-5839461.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Image
                      className="h-full rounded-lg"
                      src="https://images.pexels.com/photos/5839461/pexels-photo-5839461.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </div>
                </SplideSlide>
              </SplideTrack>

              <div className="splide__arrows splidearrowtwo">
                <button className="splide__arrow splide__arrow--prev">
                  <BiRightArrow></BiRightArrow>
                </button>
                <button className="splide__arrow splide__arrow--next">
                  <BiRightArrow></BiRightArrow>
                </button>
              </div>
            </Splide>
          </div>
        </div>
      </div>
    );
};

export default OurOffer;