import HelpmeDecide from '@/Components/HelpmeDecide/HelpmeDecide';
import HomeBanner from '@/Components/HomeBanner/HomeBanner';
import OurOffer from '@/Components/OurOffer/OurOffer';
import OurTeam from '@/Components/OurTeam/OurTeam';
import React from 'react';
import Contuct from './Contuct';
import Services from './Services';

const index = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Services></Services>
      <HelpmeDecide></HelpmeDecide>
      <OurOffer></OurOffer>
      <OurTeam></OurTeam>
      <Contuct></Contuct>
    </div>
  );
};

export default index;