"use client";
import React, { lazy, useEffect, useState } from "react";
const Footer = lazy(() => import('@/components/Footer'));
const Loading = lazy(() => import('@/components/Loading'));
const Navbar = lazy(() => import('@/components/Navbar'));
const Tours = lazy(() => import('@/components/Tours'));

import {data} from "@/json/db"

export interface Props {
  id: string;
  name: string;
  info: Array<object>;
  image: string;
}



const Page = () => {
    const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState<Props[]>([]);

  const removeTour = (id: string) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }



  
  const fetchTours =  () => {
    setLoading(true)
    try {
    
      setLoading(false);
      setTours(data);
    
      // setTours(fetchLukeSkywalker())
    } catch (e) {
      setLoading(false)
      if (e instanceof Error) {
        return e.message;
      } 
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no experience</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <div className="bg-[#121212]">
      <Navbar />
      <main className="main flex-col ">
        <Tours tours={tours} removeTour={removeTour} />
      </main>
      <Footer />
    </div>
  );
}

export default Page
