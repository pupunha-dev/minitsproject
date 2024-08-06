import { type ReactNode } from "react";

interface IHeader {
  image: {
    src: string;
    alt: string;
  }
  children: ReactNode;
}

export const Header = ({ image, children }: IHeader) => {

  return (
    <div className="flex space-x-8">
      <img {...image} />
      {children}
    </div>
  )
}