import React from "react";
import Image from "next/image";
import satisfied from "../public/featureHappy.png";
import quality from "../public/featureQuality.png";
import swiss from "../public/featureSwiss.png";
import styles from "@/app/BackgroundAnimation.module.css";

/**
 * FeaturesSection is a React functional component that renders a section
 * dedicated to showcasing key features of the company, such as its commitment to
 * customer satisfaction, its Swiss base, and the quality of its products.
 *
 * The component returns a `div` element with a background animation and three
 * child elements, each of which is a `div` element with a background color,
 * border radius, padding, and a shadow effect. The first child element displays
 * an image of a satisfied customer, the second displays an image of the Swiss
 * flag, and the third displays an image of a watch with a sapphire crystal.
 * Each child element also includes a heading element with a font size of 1.5
 * rem and a paragraph element with a font size of 1 rem.
 *
 * @return {ReactElement}
 */
const FeaturesSection = () => {
  return (
    <div
      className={`flex flex-col rounded-xl md:flex-row justify-around items-center py-16 mt-10 ${styles.backgroundAnimation} px-4 md:px-0`}
    >
      <div className="flex flex-col items-center text-center max-w-xs p-6 bg-white shadow-2xl rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl mb-6 md:mb-0 mx-2">
        <div className="mb-4">
          <Image
            src={satisfied}
            className="h-16 w-16"
            alt="Satisfied or Refunded"
          />
        </div>
        <h3 className="font-bold text-xl mb-2 text-gray-800">
          SATISFIED OR REFUNDED
        </h3>
        <p className="text-gray-600">Free Returns in the next 30 days</p>
      </div>
      <div className="flex flex-col items-center text-center max-w-xs p-6 bg-white shadow-2xl rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl mb-6 md:mb-0 mx-2">
        <div className="mb-4">
          <Image src={swiss} className="h-16 w-16" alt="Based in Switzerland" />
        </div>
        <h3 className="font-bold text-xl mb-2 text-gray-800">
          BASED IN SWITZERLAND
        </h3>
        <p className="text-gray-600">
          From an old workshop in Luzern, Switzerland
        </p>
      </div>
      <div className="flex flex-col items-center text-center max-w-xs p-6 bg-white shadow-2xl rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl mx-2">
        <div className="mb-4">
          <Image src={quality} className="h-16 w-16 " alt="Premium Quality" />
        </div>
        <h3 className="font-bold text-xl mb-2 text-gray-800">
          PREMIUM QUALITY
        </h3>
        <p className="text-gray-600">904L Stainless steel | Sapphire crystal</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
