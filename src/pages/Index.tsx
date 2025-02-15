
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { siteContent } from "../config/siteContent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center bg-lamer-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-5xl md:text-7xl font-display mb-6">
                {siteContent.brand.slogan}
              </h1>
              <p className="text-lg mb-8 max-w-md">
                {siteContent.brand.description}
              </p>
              <Link
                to="/collection"
                className="inline-block bg-lamer-navy text-white px-8 py-3 hover:bg-lamer-gold transition-colors"
              >
                FIND OUT MORE
              </Link>
            </div>
            <div className="fade-in">
              <img
                src="/lovable-uploads/557de184-0b31-4ffe-bbd2-676d4986525b.png"
                alt="La Mer Night Essentials"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.featuredProducts.map((product) => (
              <Link 
                key={product.id}
                to={`/products/${product.id}`} 
                className="group text-center fade-in"
              >
                <div className="transform transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={`/${product.image}`}
                    alt={product.name}
                    className="w-full mb-4 rounded-lg"
                  />
                  <h3 className="font-display text-xl mb-2 group-hover:text-lamer-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm mb-4">{product.description}</p>
                  <span className="text-lamer-gold">${product.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
