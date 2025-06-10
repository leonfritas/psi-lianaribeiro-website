import React from "react";
import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface BlogPostCardProps {
  img: string;
  title: string;
  desc: string;
}

export function BlogPostCard({ img, title, desc }: BlogPostCardProps) {
  return (
    <div color="transparent" className="w-full max-w-[360px]">
      <div  className="mx-0 mt-0 mb-6 h-52">
        <Image width={768} height={768} src={img} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <h4 className="mb-2">
            {title}
          </h4>
        </a>
        <p className="mb-3 font-normal !text-gray-500">
          {desc}
        </p>

      </div>
    </div>
  );
}

export default BlogPostCard;