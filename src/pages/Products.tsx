import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const productsData = [
  {
    id: 1,
    name: "The Treatment Lotion",
    price: 125,
    description: "A transformative treatment lotion that hydrates, soothes, and prepares skin.",
    image: "lovable-uploads/50220753-34ee-401e-87b1-0dad30147e61.png"
  },
  {
    id: 2,
    name: "Crème de la Mer",
    price: 380,
    description: "The moisturizer that started it all. Ultra-rich cream that hydrates, heals and transforms.",
    image: "lovable-uploads/557de184-0b31-4ffe-bbd2-676d4986525b.png"
  },
  {
    id: 3,
    name: "The Concentrate",
    price: 520,
    description: "A powerful barrier serum that helps visibly calm and strengthen skin.",
    image: "lovable-uploads/ac281d06-ef29-4196-8f3c-c3f1116191cb.png"
  }
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      const filtered = productsData.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(productsData);
    }
  }, [searchParams]);

  const handleAddToBag = (product: typeof productsData[0]) => {
    const existingBasket = localStorage.getItem("basket");
    let basketItems = existingBasket ? JSON.parse(existingBasket) : [];
    
    const existingItem = basketItems.find((item: any) => item.id === product.id);
    
    if (existingItem) {
      basketItems = basketItems.map((item: any) =>
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