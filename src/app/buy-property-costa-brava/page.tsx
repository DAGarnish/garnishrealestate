import LocationLandingPage from '@/components/LocationLandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy Property in Costa Brava | Independent Buyer Representation',
  description: 'Acquire a Costa Brava property with expert local representation. Search, negotiation, and full legal conveyancing included in a transparent €3,000 flat fee.',
};

export default function CostaBravaPage() {
  return (
    <LocationLandingPage
      location="Costa Brava"
      imageSrc="/costa_brava_hero.png"
      h1="Uncompromised Buyer Representation on the Costa Brava"
      intro="The Costa Brava offers some of the most sought-after coastal real estate in the Mediterranean. However, securing a private second home or coastal retreat here often means navigating fragmented listings and opaque agency practices. We provide a protective, advisory-led approach to property acquisition. We represent you—the buyer—exclusively, ensuring your capital is deployed efficiently and your legal interests are fully secured."
      marketInsight="Value on the Costa Brava is heavily dictated by privacy, topography, and coastal access. From hidden coves in Begur to expansive villas in Llafranc, assessing a property requires an understanding of coastal regulations (Ley de Costas) and complex land boundaries. We handle the rigorous due diligence required for these premium lifestyle purchases, protecting you from unforeseen liabilities."
    />
  );
}
