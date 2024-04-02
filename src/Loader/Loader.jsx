import React from "react";

import "../Loader/loaderAnimation.scss";
export default function Loader() {
  return (
    <div
      className="flex justify-center items-center flex-col"
      style={{ height: 100 + "vh" }}
    >
      <section className="flex">
        <svg
          width="140"
          height="162"
          viewBox="0 0 140 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="wobble-hor-bottom"
        >
          <g id="Group 3">
            <rect
              id="Rectangle 1"
              width="80.7826"
              height="80.7826"
              transform="matrix(0.866025 0.5 -2.20305e-08 1 0 40.3913)"
              fill="#8F77E4"
            />
            <rect
              id="Rectangle 2"
              width="80.7826"
              height="80.7826"
              transform="matrix(0.866025 0.5 -0.866025 0.5 69.9598 0)"
              fill="white"
            />
            <rect
              id="Rectangle 3"
              width="80.7826"
              height="80.7826"
              transform="matrix(0.866025 -0.5 2.20305e-08 1 70.0402 80.7826)"
              fill="#F4D9FC"
            />
          </g>
        </svg>
        <svg
          width="140"
          height="162"
          viewBox="0 0 140 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="wobble-hor-bottom"
        >
          <g id="Group 3">
            <rect
              id="Rectangle 1"
              width="80.7826"
              height="80.7826"
              transform="matrix(0.866025 0.5 -2.20305e-08 1 0 40.3913)"
              fill="#8F77E4"
            />
            <rect
              id="Rectangle 2"
              width="80.7826"
              height="80.7826"
              transform="matrix(0.866025 0.5 -0.866025 0.5 69.9598 0)"
              fill="white"
            />
            <rect
              id="Rectangle 3"
              width="80.7826"
              height="80.7826"
              transform="matrix(0.866025 -0.5 2.20305e-08 1 70.0402 80.7826)"
              fill="#F4D9FC"
            />
          </g>
        </svg>
      </section>

      <h6 className="text-white text-3xl mt-10 tracking-in-contract">
        Loading...
      </h6>
    </div>
  );
}
