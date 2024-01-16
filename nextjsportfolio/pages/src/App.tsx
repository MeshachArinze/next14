import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import  {items} from '../../lib/data';

export interface Prop {
  id: number;
  title: string;
  category: string;
  img: string;
  link: string;
  href: string;
}
[];

const array = Array.from(items).map((item) => item.category)
const set = new Set(array);
const allCategories = ['all', set];

function App() {
  const [menuItems, setMenuItems] = useState<Array<Prop>>(items);
const [categories] =
  useState<Array<string | Set<string>>>(allCategories);

  const filterItems = (category: string) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2 className="text-cyan-500">My project</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
