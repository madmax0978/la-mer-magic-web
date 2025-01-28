import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

// Mock product data - in a real app, this would come from an API
const productsData = [
  {
    id: 1,
    name: "The Treatment Lotion",
    price: 125,
    description: "A transformative treatment lotion that hydrates, soothes, and prepares skin.",
    image: "/lovable-uploads/50220753-34ee-401e-87b1-0dad30147e61.png"
  },
  {
    id: 2,
    name: "Crème de la Mer",
    price: 380,
    description: "The moisturizer that started it all. Ultra-rich cream that hydrates, heals and transforms.",
    image: "/lovable-uploads/557de184-0b31-4ffe-bbd2-676d4986525b.png"
  },
  {
    id: 3,
    name: "The Concentrate",
    price: 520,
    description: "A powerful barrier serum that helps visibly calm and strengthen skin.",
    image: "/lovable-uploads/ac281d06-ef29-4196-8f3c-c3f1116191cb.png"
  }
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToBag = (productId: number) => {
    // In a real app, this would interact with a cart management system
    console.log("Adding product to bag:", productId);
    toast({
      title: "Added to Bag",
      description: "The product has been added to your shopping bag.",
    });
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="mb-8">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardHeader>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <CardTitle className="mt-4">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-xl font-semibold mt-2">${product.price}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                View Details
              </Button>
              <Button onClick={() => handleAddToBag(product.id)}>
                Add to Bag
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;