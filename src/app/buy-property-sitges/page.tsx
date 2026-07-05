import LocationLandingPage from '@/components/LocationLandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy Property in Sitges | Independent Buying Agent',
  description: 'Purchasing in Sitges? We provide independent buyer representation, aggressive negotiation, and full legal conveyancing for a €3,000 flat fee. Zero conflicts.',
};

export default function SitgesPage() {
  return (
    <LocationLandingPage
      location="Sitges"
      imageSrc="/luxury_villa_sitges.png"
      h1="Independent Buyer Representation in Sitges"
      intro="Acquiring premium real estate in Sitges requires more than casual browsing; it requires strategic representation. The Sitges coastal market is highly competitive and heavily skewed toward seller interests. We operate exclusively on behalf of the buyer. From the initial search to securing the asset, we provide uncompromised representation, ensuring international and lifestyle buyers acquire the right property at the correct valuation."
      marketInsight="The Sitges market moves rapidly, characterized by high demand for premium coastal assets and established residential enclaves. Navigating this landscape requires an agent who understands the nuances of individual micro-markets, from Terramar to Vallpineda. We source on-market and off-market opportunities, filtering out compromised assets and focusing strictly on properties that align with your lifestyle and investment criteria."
    />
  );
}
