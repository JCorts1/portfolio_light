import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "../styles/Carousel.css"
import localland from "../img/projects-img/localland.png"
import localmap from "../img/projects-img/localmap.png"
import localevent from "../img/projects-img/localevent.png"
import localchat from "../img/projects-img/localchat.png"
import localbookings from "../img/projects-img/localbookings.png"

const projectsPics = [
  localland,
  localmap,
  localevent,
  localchat,
  localbookings
];

export function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className=" dark"
    >
      <CarouselContent className="carousel-content">
        {projectsPics.map((pic, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <img src={pic} alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-white" />
      <CarouselNext className="text-white" />
    </Carousel>
  );
}
