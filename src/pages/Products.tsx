
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { siteContent, Product } from "../config/siteContent";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(siteContent.products);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      const filtered = siteContent.products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(siteContent.products);
    }
  }, [searchParams]);

  const handleAddToBag = (product: Product) => {
    const existingBasket = localStorage.getItem("basket");
    let basketItems = existingBasket ? JSON.parse(existingBasket) : [];
    
    const existingItem = basketItems.find((item: Product) => item.id === product.id);
    
    if (existingItem) {
      basketItems = basketItems.map((item: Product & { quantity: number }) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      basketItems.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem("basket", JSON.stringify(basketItems));
    
    toast({
      title: "Added to Bag",
      description: "The product has been added to your shopping bag.",
    });
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardHeader>
              <img
                src={`/${product.image}`}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <CardTitle className="mt-4">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{product.shortDescription}</p>
              <p className="text-xl font-semibold mt-2">${product.price}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                View Details
              </Button>
              <Button onClick={() => handleAddToBag(product)}>
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
