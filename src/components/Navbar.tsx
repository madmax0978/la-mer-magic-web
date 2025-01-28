import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

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

const Navbar = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const filteredProducts = productsData.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredProducts.length === 1) {
      navigate(`/products/${filteredProducts[0].id}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    } else {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-display">
              LA MER
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/collection" className="hover:text-lamer-gold transition-colors">
                Collection
              </Link>
              <Link to="/products" className="hover:text-lamer-gold transition-colors">
                Products
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 hover:text-lamer-gold transition-colors"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={20} />
            </button>
            <button className="p-2 hover:text-lamer-gold transition-colors">
              <User size={20} />
            </button>
            <button 
              className="p-2 hover:text-lamer-gold transition-colors"
              onClick={() => navigate('/basket')}
            >
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </div>

      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search Products</DialogTitle>
          </DialogHeader>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Search
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;