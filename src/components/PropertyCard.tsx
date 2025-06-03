
import { Heart, Star, Bed, Bath, Square, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    location: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    rating: number;
    reviews: number;
    image: string;
    featured: boolean;
  };
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay Buttons */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
          {property.featured && (
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
              Featured
            </Badge>
          )}
          <div className="ml-auto">
            <Button
              size="sm"
              variant="secondary"
              className="w-8 h-8 p-0 bg-white/90 hover:bg-white backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
            >
              <Heart 
                className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'} transition-colors`} 
              />
            </Button>
          </div>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-3 left-3">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1">
            <span className="font-bold text-lg text-gray-900">${property.price.toLocaleString()}</span>
            <span className="text-sm text-gray-600">/month</span>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{property.rating}</span>
            <span className="text-sm text-gray-500">({property.reviews})</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms} bed</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms} bath</span>
            </div>
            <div className="flex items-center space-x-1">
              <Square className="w-4 h-4" />
              <span>{property.sqft} sqft</span>
            </div>
          </div>
        </div>

        <Button 
          className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            console.log('Contact for property:', property.id);
          }}
        >
          Contact Agent
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
