
import { useState } from "react";
import { Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface FilterSectionProps {
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  bedrooms: string;
  setBedrooms: (bedrooms: string) => void;
}

const FilterSection = ({ 
  priceRange, 
  setPriceRange, 
  bedrooms, 
  setBedrooms 
}: FilterSectionProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const bedroomOptions = [
    { value: "", label: "Any" },
    { value: "1", label: "Studio" },
    { value: "1", label: "1 BR" },
    { value: "2", label: "2 BR" },
    { value: "3", label: "3+ BR" }
  ];

  const activeFiltersCount = [
    priceRange[0] > 500 || priceRange[1] < 3000,
    bedrooms !== ""
  ].filter(Boolean).length;

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Available Properties</h2>
          <p className="text-gray-600">Find your perfect rental home</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-1 bg-blue-100 text-blue-700">
                {activeFiltersCount}
              </Badge>
            )}
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </Button>
          
          <select 
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="newest"
          >
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Expandable Filters */}
      {showFilters && (
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Price Range
              </label>
              <div className="px-2">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={5000}
                  min={500}
                  step={100}
                  className="mb-3"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0].toLocaleString()}</span>
                  <span>${priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Bedrooms Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Bedrooms
              </label>
              <div className="flex flex-wrap gap-2">
                {bedroomOptions.map((option) => (
                  <Button
                    key={option.value + option.label}
                    variant={bedrooms === option.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setBedrooms(option.value)}
                    className={bedrooms === option.value ? "bg-blue-600" : ""}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Property Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Property Type
              </label>
              <div className="flex flex-wrap gap-2">
                {['Apartment', 'House', 'Condo', 'Studio'].map((type) => (
                  <Button
                    key={type}
                    variant="outline"
                    size="sm"
                    className="hover:bg-blue-50"
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
            <Button
              variant="ghost"
              onClick={() => {
                setPriceRange([500, 3000]);
                setBedrooms("");
              }}
            >
              Clear All
            </Button>
            <Button 
              onClick={() => setShowFilters(false)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
