import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

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
            <button className="p-2 hover:text-lamer-gold transition-colors">
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
    </nav>
  );
};

export default Navbar;