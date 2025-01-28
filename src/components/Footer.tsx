import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-lamer-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-xl mb-4">LA MER</h3>
            <p className="text-sm opacity-80">
              Discover the transformative power of the sea with La Mer's luxury skincare collection.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>Moisturizers</li>
              <li>Serums</li>
              <li>Eye Care</li>
              <li>Masks</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm">
              <li>Contact Us</li>
              <li>Shipping & Returns</li>
              <li>FAQ</li>
              <li>Store Locator</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Facebook className="hover:text-lamer-gold cursor-pointer transition-colors" />
              <Instagram className="hover:text-lamer-gold cursor-pointer transition-colors" />
              <Twitter className="hover:text-lamer-gold cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} La Mer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;