import { type ReactNode } from "react";

interface ICard {
  title: string;
  children: ReactNode;
}

export const Card = ({ title, children }: ICard) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
      <button>Deletar</button>
    </div>
  )
}