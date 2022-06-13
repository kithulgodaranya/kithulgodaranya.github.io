import React from "react";

type Props = {
  src: string;
  className?: string;
};

let src =
  "https://images.pexels.com/photos/2823459/pexels-photo-2823459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

const Image: React.FC<Props> = ({ src, className }) => (
  <div className={`${className} my-5`}>
    <img src={src} alt="img" className="rounded-3xl w-72" />
  </div>
);

const Gallery: React.FC = () => (
  <div className="grid  grid-cols-4 gap-8 my-20 mx-10 justify-items-center">
    <Image src={src} className="" />
    <Image src={src} />
    <Image src={src} />
    <Image src={src} />
    <Image src={src} />
    <Image src={src} />
  </div>
);

export default Gallery;
