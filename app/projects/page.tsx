import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { CircleArrowOutUpRight, Github } from "lucide-react";
const page = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <img
          src="3.jpg"
          alt="background"
          className="h-full max-w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col text-center  items-center  text-white bg-black/30  ">
          <h1 className="text-center text-8xl font-semibold text-[#095de4] text-shadow-[#095de4] pb-8 pt-20 glow-text">
            My Projects
          </h1>
          <p className="text-center font-light text-gray-300  pb-10">
            Explore my latest work and digital creations
          </p>

          <div className="flex gap-26">
            <div className="flex flex-col">
              <h3 className="border border-white p-1 rounded-t-xl w-[100px] text-center text-sm font-light text-white ml-28 ">
                Frontend
              </h3>
              <Carousel
                className="w-[600px] max-w-xs items-center border p-8 rounded-2xl bg-gradient-to-br
from-[#0d0f10]
via-[#1a1d1f]
to-[#0f1a1c] "
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="">
                        <Card
                          className=" bg-gradient-to-br from-[#0b1e24] via-[#0a2b30] to-[#053036]
  border border-[#00eaff] "
                        >
                          <CardContent className="flex flex-col aspect-square  ">
                            <div className="flex justify-between items-center gap-3.5 pb-3">
                              <h1 className="text-sm font-extrabold">
                                Ecommerce platform
                              </h1>
                              <span className="text-[10px] font-extralight ">
                                Date
                              </span>
                            </div>
                            <p className="text-xs pb-4">
                              A full-stack ecommerce platform built with React
                              and NOdejs featuring user authentication ,payment
                              integration, and admin dashboard{" "}
                            </p>
                            <div className="flex gap-3 justify-center items-center text-center ">
                              <p className="border rounded-2xl p-2 ">React</p>
                              <p className="border rounded-2xl p-2">Nodejs</p>
                              <p className="border rounded-2xl p-2">MongoDb</p>
                            </div>

                            <div className="flex gap-6 mt-6">
                              <div className="flex-1 border rounded-2xl p-2 flex items-center justify-center gap-2 bg-gray-700">
                                <Github />
                                <span className="text-center">Code</span>
                              </div>
                              <div className="flex-1 border rounded-2xl p-2 flex items-center justify-center gap-2 bg-blue-600">
                                <CircleArrowOutUpRight />
                                <span className="text-center">Live Demo</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="flex flex-col">
              <h3 className="border border-white p-1 rounded-t-xl w-[100px] text-center text-sm font-light text-white ml-28 ">
                Backend
              </h3>
              <Carousel
                className="w-[600px] max-w-xs items-center border p-8 rounded-2xl bg-gradient-to-br
from-[#0d0f10]
via-[#1a1d1f]
to-[#0f1a1c] "
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="">
                        <Card
                          className=" bg-gradient-to-br from-[#0b1e24] via-[#0a2b30] to-[#053036]
  border border-[#00eaff] "
                        >
                          <CardContent className="flex flex-col aspect-square  ">
                            <div className="flex justify-between items-center gap-3.5 pb-3">
                              <h1 className="text-sm font-extrabold">
                                Ecommerce platform
                              </h1>
                              <span className="text-[10px] font-extralight ">
                                Date
                              </span>
                            </div>
                            <p className="text-xs pb-4">
                              A full-stack ecommerce platform built with React
                              and NOdejs featuring user authentication ,payment
                              integration, and admin dashboard{" "}
                            </p>
                            <div className="flex gap-3 justify-center items-center text-center ">
                              <p className="border rounded-2xl p-2 ">React</p>
                              <p className="border rounded-2xl p-2">Nodejs</p>
                              <p className="border rounded-2xl p-2">MongoDb</p>
                            </div>

                            <div className="flex gap-6 mt-6">
                              <div className="flex-1 border rounded-2xl p-2 flex items-center justify-center gap-2 bg-gray-700">
                                <Github />
                                <span className="text-center">Code</span>
                              </div>
                              <div className="flex-1 border rounded-2xl p-2 flex items-center justify-center gap-2 bg-blue-600">
                                <CircleArrowOutUpRight />
                                <span className="text-center">Live Demo</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="flex flex-col">
              <h3 className="border border-white p-1 rounded-t-xl w-[100px] text-center text-sm font-light text-white ml-28 ">
                UI/UX
              </h3>
              <Carousel
                className="w-[600px] max-w-xs items-center border p-8 rounded-2xl bg-gradient-to-br
from-[#0d0f10]
via-[#1a1d1f]
to-[#0f1a1c] "
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="">
                        <Card
                          className=" bg-gradient-to-br from-[#0b1e24] via-[#0a2b30] to-[#053036]
  border border-[#00eaff] "
                        >
                          <CardContent className="flex flex-col aspect-square  ">
                            <div className="flex justify-between items-center gap-3.5 pb-3">
                              <h1 className="text-sm font-extrabold">
                                Ecommerce  UI
                              </h1>
                              <span className="text-[10px] font-extralight ">
                                Date
                              </span>
                            </div>
                            <p className="text-xs pb-4">
                              A full-stack ecommerce platform built with React
                              and NOdejs featuring user authentication ,payment
                              integration, and admin dashboard{" "}
                            </p>
                            <div className="flex gap-3 justify-center items-center text-center ">
                              <p className="border rounded-2xl p-2 ">React</p>
                              <p className="border rounded-2xl p-2">Nodejs</p>
                              <p className="border rounded-2xl p-2">MongoDb</p>
                            </div>

                            <div className="flex gap-6 mt-6">
                              <div className="flex-1 border rounded-2xl p-2 flex items-center justify-center gap-2 bg-gray-700">
                                <Github />
                                <span className="text-center">Code</span>
                              </div>
                              <div className="flex-1 border rounded-2xl p-2 flex items-center justify-center gap-2 bg-blue-600">
                                <CircleArrowOutUpRight />
                                <span className="text-center">Live Demo</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
