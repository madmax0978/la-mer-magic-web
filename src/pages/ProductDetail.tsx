import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, Heart, ShoppingBag } from "lucide-react";

const productsData = [
  {
    id: 1,
    name: "The Treatment Lotion",
    price: 125,
    description: "A transformative treatment lotion that hydrates, soothes, and prepares skin.",
    fullDescription: "This powerful treatment lotion hydrates, soothes and prepares skin for the treatments that follow. Infused with our nutrient-rich Miracle Broth™, this liquid energy instantly awakens skin's natural healing energies to help reveal a healthy, renewed glow.",
    image: "lovable-uploads/50220753-34ee-401e-87b1-0dad30147e61.png",
    benefits: [
      "Instantly hydrates and energizes skin",
      "Helps calm signs of irritation",
      "Prepares skin for treatments that follow"
    ],
    ingredients: "Miracle Broth™, Sea Kelp, Vitamins, Minerals",
    howToUse: "After cleansing, sweep over face and neck with a cotton pad. Follow with your serum and moisturizer.",
    size: "150ml"
  },
  {
    id: 2,
    name: "Crème de la Mer",
    price: 380,
    description: "The moisturizer that started it all. Ultra-rich cream that hydrates, heals and transforms.",
    fullDescription: "The moisturizer that started it all. This ultra-rich cream transforms skin on contact with our legendary Miracle Broth™. It helps heal dryness, soften the look of fine lines and wrinkles, and gives skin a naturally vibrant, healthier-looking glow.",
    image: "lovable-uploads/557de184-0b31-4ffe-bbd2-676d4986525b.png",
    benefits: [
      "Deeply moisturizes and soothes",
      "Helps heal dryness",
      "Softens the look of fine lines"
    ],
    ingredients: "Miracle Broth™, Lime Tea Extract, Marine Algae",
    howToUse: "Warm between fingers until translucent. Press gently into skin.",
    size: "60ml"
  },
  {
    id: 3,
    name: "The Concentrate",
    price: 520,
    description: "A powerful barrier serum that helps visibly calm and strengthen skin.",
    fullDescription: "This powerful barrier serum helps calm and strengthen skin, visibly reducing the appearance of redness and irritation. Infused with our concentrated Miracle Broth™, this serum helps protect against environmental stressors and supports skin's natural healing energies.",
    image: "lovable-uploads/ac281d06-ef29-4196-8f3c-c3f1116191cb.png",
    benefits: [
      "Strengthens skin's barrier",
      "Reduces visible redness",
      "Protects against environmental stress"
    ],
    ingredients: "Concentrated Miracle Broth™, Lime Tea Concentrate, Marine Algae",
    howToUse: "Apply morning and evening after cleansing and before moisturizer.",
    size: "50ml"
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const product = productsData.find(p => p.id === Number(id));

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