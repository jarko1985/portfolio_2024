"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Avatar from '@/public/jarko.png'

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="120" className="w-full">
          <Image
            src={Avatar}
            height="1000"
            width="1000"
            className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            unoptimized={true}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
