
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, Heart, ShoppingBag } from "lucide-react";
import { siteContent, Product } from "../config/siteContent";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const product = siteContent.products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-12 text-center">
        <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
        <Button onClick={() => navigate("/products")}>Back to Products</Button>
      </div>
    );
  }

  const handleAddToBag = () => {
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
      <button
        onClick={() => navigate("/products")}
        className="flex items-center gap-2 mb-8 hover:text-gray-600 transition-colors"
      >
        <ChevronLeft size={20} />
        Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src={`/${product.image}`}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-display mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-6">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.fullDescription}</p>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Key Benefits</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-600">{benefit}</li>
              ))}
            </ul>
          </div>

          <Separator className="my-6" />

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Size</h2>
            <p className="text-gray-600">{product.size}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">How to Use</h2>
            <p className="text-gray-600">{product.howToUse}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Key Ingredients</h2>
            <p className="text-gray-600">{product.ingredients}</p>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1" onClick={handleAddToBag}>
              <ShoppingBag className="mr-2" size={20} />
              Add to Bag
            </Button>
            <Button variant="outline" size="lg">
              <Heart size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
