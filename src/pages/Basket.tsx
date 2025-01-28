import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface BasketItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Basket = () => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const storedBasket = localStorage.getItem("basket");
    if (storedBasket) {
      setBasketItems(JSON.parse(storedBasket));
    }
  }, []);

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedItems = basketItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    
    setBasketItems(updatedItems);
    localStorage.setItem("basket", JSON.stringify(updatedItems));
  };

  const removeItem = (itemId: number) => {
    const updatedItems = basketItems.filter(item => item.id !== itemId);
    setBasketItems(updatedItems);
    localStorage.setItem("basket", JSON.stringify(updatedItems));
    
    toast({
      title: "Item Removed",
      description: "The item has been removed from your basket.",
    });
  };

  const total = basketItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <h1 className="text-3xl font-display mb-8">Shopping Basket</h1>
      
      {basketItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">Your basket is empty</p>
        </div>
      ) : (
        <div className="space-y-6">
          {basketItems.map((item) => (
            <Card key={item.id}>
              <CardHeader className="flex flex-row items-center gap-4">
                <img
                  src={`/${item.image}`}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="text-xl font-display">{item.name}</h3>
                  <p className="text-lamer-gold">${item.price}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="destructive"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </Button>
                <p className="text-lg font-semibold">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </CardFooter>
            </Card>
          ))}
          
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <p className="text-2xl font-display text-right">
              Total: ${total.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;