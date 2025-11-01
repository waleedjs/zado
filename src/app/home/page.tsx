import React from 'react';
import { Metadata } from 'next';
import HomeMain from '@/pages/homes/home';

export const metadata: Metadata = {
  title: "Zado - Home Page",
};

const HomePage = () => {
  return (
    <HomeMain/>
  );
};

export default HomePage;