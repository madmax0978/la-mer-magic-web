import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
                NIGHT ESSENTIALS
              </h1>
              <p className="text-lg mb-8 max-w-md">
                Elevate your night routine with La Mer's Glow Up Sleep Kit: luxe satin essentials, skincare treasures, and aromatherapy.
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
            <div className="text-center fade-in">
              <img
                src="/lovable-uploads/2242ce4a-0fbd-42ea-b264-15aff45f7d10.png"
                alt="Luxury Sleep Mist"
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="font-display text-xl mb-2">Luxury Sleep Mist</h3>
              <p className="text-sm mb-4">A calming pillow and room spray</p>
              <span className="text-lamer-gold">$150</span>
            </div>
            <div className="text-center fade-in">
              <img
                src="/lovable-uploads/50220753-34ee-401e-87b1-0dad30147e61.png"
                alt="Le Concentré"
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="font-display text-xl mb-2">Le Concentré</h3>
              <p className="text-sm mb-4">Protective serum for renewed skin</p>
              <span className="text-lamer-gold">$580</span>
            </div>
            <div className="text-center fade-in">
              <img
                src="/lovable-uploads/ac281d06-ef29-4196-8f3c-c3f1116191cb.png"
                alt="Valentine's Collection"
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="font-display text-xl mb-2">Valentine's Collection</h3>
              <p className="text-sm mb-4">Limited edition lip care set</p>
              <span className="text-lamer-gold">$200</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;