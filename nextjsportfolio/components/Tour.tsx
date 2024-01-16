import Image from "next/image";
import React, { useState } from "react";

interface Props {
  id: string;
  name: string;
  info: Array<object>;
  title: string;
  removeTour: Function;
  image: string;
}

type Item = {
  id?: string | undefined;
  title?: string | undefined;
};

const Tour = ({ id, title, info, name, image, removeTour }: Props) => {
  return (
    <article className="single-tour">
      <Image src={image} alt={name} width={300} height={300} priority />
      <footer>
        <div className="tour-info">
          <h2 className="text-white">{name}</h2>
          <h4 className="text-white">{title}</h4>
          {info.map(({ id, title }: Item) => {
            return (
              <ul key={id}>
                <li className="text-white">&#x2022; {title}</li>
              </ul>
            );
          })}
        </div>
        <p></p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
