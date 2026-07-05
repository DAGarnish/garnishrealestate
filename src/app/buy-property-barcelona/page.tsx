import LocationLandingPage from '@/components/LocationLandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy Property in Barcelona | Expert Buyer’s Agent',
  description: 'Secure your Barcelona property with an independent buying agent. We manage the search, negotiation, and legal conveyancing for a €3,000 flat fee.',
};

export default function BarcelonaPage() {
  return (
    <LocationLandingPage
      location="Barcelona"
      imageSrc="/barcelona_hero.png"
      h1="Strategic Property Acquisition in Barcelona"
      intro="Navigating Barcelona’s urban property market demands sharp commercial intelligence and rigorous legal oversight. Whether you are acquiring a high-yield investment, a pied-à-terre in Eixample, or relocating a family, the conventional real estate model leaves buyers exposed. We act as your dedicated acquisition advisors. Our mandate is simple: source the optimal asset, ruthlessly negotiate the terms, and execute the legal transfer without friction or conflict of interest."
      marketInsight="Barcelona’s real estate sectors are distinct and complex. Assessing the true value of an asset here means understanding zoning regulations, building structural histories (ITE), and the realities of the local rental yield environment. We strip away the marketing noise to evaluate properties purely on their structural, legal, and commercial merits, ensuring your urban investment is sound."
    />
  );
}
