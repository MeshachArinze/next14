import React, { lazy } from "react";
const Tour = lazy(() => import("./Tour"));

interface Tours {
    tours: any;
    removeTour: any;
}
const Tours = ({ tours, removeTour }: Tours) => {
  return (
    <section>
      <div className="title">
        <h2 className="text-cyan-400">My Experience</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour: any) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
