import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// Mock product data - in a real app, this would come from an API
const productsData = [
  {
    id: 1,
    name: "The Treatment Lotion",
    price: 125,
    description: "A transformative treatment lotion that hydrates, soothes, and prepares skin.",
    fullDescription: "This powerful treatment lotion hydrates, soothes and prepares skin for the treatments that follow. Infused with our nutrient-rich Miracle Broth™, this liquid energy instantly awakens skin's natural healing energies to help reveal a healthy, renewed glow.",
    image: "/lovable-uploads/50220753-34ee-401e-87b1-0dad30147e61.png",
    benefits: [
      "Instantly hydrates and energizes skin",
      "Helps calm signs of irritation",
      "Prepares skin for treatments that follow"
    ]
  },
  {
    id: 2,
    name: "Crème de la Mer",
    price: 380,
    description: "The moisturizer that started it all. Ultra-rich cream that hydrates, heals and transforms.",
    fullDescription: "The moisturizer that started it all. This ultra-rich cream transforms skin on contact with our legendary Miracle Broth™. It helps heal dryness, soften the look of fine lines and wrinkles, and gives skin a naturally vibrant, healthier-looking glow.",
    image: "/lovable-uploads/557de184-0b31-4ffe-bbd2-676d4986525b.png",
    benefits: [
      "Deeply moisturizes and soothes",
      "Helps heal dryness",
      "Softens the look of fine lines"
    ]
  },
  {
    id: 3,
    name: "The Concentrate",
    price: 520,
    description: "A powerful barrier serum that helps visibly calm and strengthen skin.",
    fullDescription: "This powerful barrier serum helps calm and strengthen skin, visibly reducing the appearance of redness and irritation. Infused with our concentrated Miracle Broth™, this serum helps protect against environmental stressors and supports skin's natural healing energies.",
    image: "/lovable-uploads/ac281d06-ef29-4196-8f3c-c3f1116191cb.png",
    benefits: [
      "Strengthens skin's barrier",
      "Reduces visible redness",
      "Protects against environmental stress"
    ]
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
    toast({
      title: "Added to Bag",
      description: "The product has been added to your shopping bag.",
    });
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src={product.image}
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

          <div className="space-x-4">
            <Button size="lg" onClick={handleAddToBag}>
              Add to Bag
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/products")}
            >
              Back to Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;