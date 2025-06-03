
import { useState } from "react";
import { Search, MapPin, Star, Bed, Bath, Square, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import FilterSection from "@/components/FilterSection";

const Index = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [priceRange, setPriceRange] = useState([500, 3000]);
  const [bedrooms, setBedrooms] = useState("");
  
  // Sample property data
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      location: "Downtown, Seattle",
      price: 2800,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Cozy Studio with City View",
      location: "Capitol Hill, Seattle",
      price: 1650,
      bedrooms: 1,
      bathrooms: 1,
      sqft: 650,
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Luxury Waterfront Condo",
      location: "Belltown, Seattle",
      price: 4200,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=500&h=300&fit=crop",
      featured: true
    },
    {
      id: 4,
      title: "Charming House with Garden",
      location: "Fremont, Seattle",
      price: 3100,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1500,
      rating: 4.7,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=500&h=300&fit=crop",
      featured: false
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesLocation = !searchLocation || 
      property.location.toLowerCase().includes(searchLocation.toLowerCase());
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    const matchesBedrooms = !bedrooms || property.bedrooms.toString() === bedrooms;
    
    return matchesLocation && matchesPrice && matchesBedrooms;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <Hero 
        searchLocation={searchLocation}
        setSearchLocation={setSearchLocation}
      />
      
      <main className="container mx-auto px-4 py-12">
        <FilterSection 
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          bedrooms={bedrooms}
          setBedrooms={setBedrooms}
        />
        
        {/* Featured Properties Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Properties</h2>
              <p className="text-gray-600">Handpicked homes in your area</p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
              <div className="text-gray-600">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">850+</div>
              <div className="text-gray-600">Happy Tenants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Neighborhoods</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of happy renters who found their perfect space</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Searching
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              List Your Property
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RentFinder</h3>
              <p className="text-gray-400">Find your perfect home for rent in your favorite neighborhood.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Renters</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Search Properties</li>
                <li>Saved Searches</li>
                <li>Rental Guides</li>
                <li>Tenant Resources</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Landlords</h4>
              <ul className="space-y-2 text-gray-400">
                <li>List Property</li>
                <li>Pricing Tools</li>
                <li>Landlord Resources</li>
                <li>Property Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RentFinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
