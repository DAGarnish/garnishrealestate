import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Property } from '@/types';

// This would typically fetch from your parsed DB JSON or API
async function getPropertyBySlug(slug: string): Promise<Property | null> {
  // Placeholder mock data
  if (slug === 'sample-property') {
    return {
      id: '1',
      slug: 'sample-property',
      title: 'Beautiful Family Home',
      description: 'A wonderful home perfect for a family. Features a large backyard.',
      price: 450000,
      bedrooms: 4,
      bathrooms: 2,
      area: 2500,
      location: '123 Maple Street',
      status: 'for-sale',
      featuredImage: '/placeholder.jpg',
      galleryImages: [],
      amenities: ['Garage', 'Pool'],
    };
  }
  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  
  if (!property) {
    return {
      title: 'Property Not Found',
    };
  }

  // Preserving SEO equity: Exact title, description, and canonical URL structure
  return {
    title: `${property.title} | Garnish Real Estate`,
    description: property.description.substring(0, 160),
    openGraph: {
      title: property.title,
      description: property.description.substring(0, 160),
      images: [property.featuredImage],
    },
    // If the original site had specific canonicals, map them here:
    alternates: {
      canonical: `/properties/${property.slug}/`,
    }
  };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Property Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
        <div className="flex items-center text-gray-600 gap-4">
          <span className="font-semibold text-xl text-blue-600">
            ${property.price.toLocaleString()}
          </span>
          <span>•</span>
          <span>{property.location}</span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm uppercase font-bold tracking-wider">
            {property.status.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Main Image Placeholder */}
          <div className="bg-gray-200 aspect-video rounded-lg mb-8 flex items-center justify-center text-gray-500">
            [Featured Image Placeholder]
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p>{property.description}</p>
          </div>
        </div>

        {/* Sidebar Info */}
        <div>
          <div className="bg-gray-50 p-6 rounded-lg border">
            <h3 className="font-bold text-xl mb-4">Property Details</h3>
            <ul className="space-y-3">
              <li className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Bedrooms</span>
                <span className="font-semibold">{property.bedrooms}</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Bathrooms</span>
                <span className="font-semibold">{property.bathrooms}</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Area</span>
                <span className="font-semibold">{property.area} sqft</span>
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="font-bold text-xl mb-4">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {property.amenities.map(amenity => (
                  <span key={amenity} className="bg-white border px-3 py-1 rounded-full text-sm">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
