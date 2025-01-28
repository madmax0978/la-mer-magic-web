import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Collection = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-display mb-6">The Miracle Broth™ Collection</h1>
        <p className="text-lg text-gray-600">
          Discover the collection that transformed skincare forever. Each formula is
          infused with our legendary Miracle Broth™, the cell-renewing elixir that
          flows through all La Mer.
        </p>
      </div>

      <Carousel className="max-w-5xl mx-auto">
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardHeader>
                <img
                  src="/lovable-uploads/50220753-34ee-401e-87b1-0dad30147e61.png"
                  alt="Treatment Lotion"
                  className="w-full h-96 object-cover"
                />
                <CardTitle className="mt-4">The Treatment Lotion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The essential first step in every transformation. This powerful
                  treatment lotion hydrates, soothes and prepares skin for the
                  treatments that follow.
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardHeader>
                <img
                  src="/lovable-uploads/557de184-0b31-4ffe-bbd2-676d4986525b.png"
                  alt="Crème de la Mer"
                  className="w-full h-96 object-cover"
                />
                <CardTitle className="mt-4">Crème de la Mer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The moisturizer that started it all. This ultra-rich cream
                  hydrates, heals and transforms the look of skin.
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardHeader>
                <img
                  src="/lovable-uploads/ac281d06-ef29-4196-8f3c-c3f1116191cb.png"
                  alt="The Concentrate"
                  className="w-full h-96 object-cover"
                />
                <CardTitle className="mt-4">The Concentrate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A powerful barrier serum that helps calm and strengthen skin,
                  visibly reducing the appearance of redness and irritation.
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Collection;