import LocationLandingPage from '@/components/LocationLandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy Property in Inland Catalonia | Independent Buying Agent',
  description: 'Sourcing estates and rural properties in Inland Catalonia. We offer independent buyer representation and full legal conveyancing for a flat €3,000 fee.',
};

export default function InlandCataloniaPage() {
  return (
    <LocationLandingPage
      location="Inland Catalonia"
      imageSrc="/inland_catalonia_hero.png"
      h1="Acquiring Rural Estates & Land in Inland Catalonia"
      intro="Purchasing rural real estate, historic masías, or expansive estates in Inland Catalonia presents unique structural and legal complexities. Conventional agencies are rarely equipped to protect buyers in these highly specific transactions. As your independent advisory firm, we manage the complexities of rural property acquisition. We prioritize thorough legal verification, land boundary assessments, and aggressive negotiation, securing your asset for a flat, transparent fee."
      marketInsight="The value of inland property extends beyond the structure; it encompasses water rights, agricultural zoning, and historic building protections. Whether surveying a vineyard estate or a secluded rural retreat, we provide the commercial and legal scrutiny necessary to ensure the asset is unencumbered and structurally viable before you commit capital."
    />
  );
}
