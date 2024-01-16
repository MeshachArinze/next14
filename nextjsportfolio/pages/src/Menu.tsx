import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


type Props = {
  id: number;
  title: string;
  category: string;
  img: string;

  href: string;
  link: string;
};


const Menu = ({ items }: any) => {
  return (
    <div className="section-center">
      {items.map(
        (menuItem: Props) => {
          const { id, title, img, href, link,  } = menuItem;
          return (
            
            <div key={id} className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <Image
                  className="w-full h-auto"
                  src={img}
                  alt={title}
                  width={350}
                  height={350}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  loading="lazy"
                />
                <h3 className="text-2xl font-semibold mt-8 text-cyan-500">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {link}
                </p>
                <div className="flex mt-12 gap-2">
                  <Link
                    href={href}
                    className="flex-1 text-sm py-3 text-center bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                  >
                    Live preview
                  </Link>
                  <Link
                    href="https://github.com/MeshachArinze/JavaScriptwork"
                    className="flex-1 text-sm py-3 border text-center  rounded-full hover:border-blue-500 hover:text-blue-500"
                  >
                    Checkout github
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Menu;
