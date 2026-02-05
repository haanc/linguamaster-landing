import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { SEO } from '../components/SEO';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO path="/" />
      <Hero />
      <Features />
    </>
  );
};
