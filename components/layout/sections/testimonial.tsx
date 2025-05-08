"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://via.placeholder.com/150",
    name: "J.K.",
    userName: "Taxi Driver",
    comment:
      "If you're looking for rental cars, rental car protection or panel beating services, look no further. These guys are super professional with top quality service. Cheers!",
    rating: 5.0,
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Brian D.",
    userName: "Rideshare Driver",
    comment:
      "Exceptional service! The team at Northern Taxiz Club went above and beyond to assist me with my protection needs. Prompt, reliable, and knowledgeable. Highly recommend their services.",
    rating: 5.0,
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Prince S.",
    userName: "Taxi Operator",
    comment:
      "Really good experience with them, they give good quotes and do work on time and on proper appointment. Very satisfied with their service.",
    rating: 4.9,
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Harish R.",
    userName: "Taxi Driver",
    comment:
      "Reasonable prices but customer service is the one which I like the most. Love to recommend them for best taxi protection. Many thanks!",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-2xl md:text-4xl text-center font-bold mb-4">
          Hear What Our Members Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    {Array.from({ length: Math.floor(review.rating) }).map(
                      (_, index) => (
                        <Star
                          key={index}
                          className="size-4 fill-primary text-primary"
                        />
                      )
                    )}
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>
                        {review.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};