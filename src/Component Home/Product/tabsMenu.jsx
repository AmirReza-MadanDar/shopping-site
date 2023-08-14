import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./TabMenu.css";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const Img = styled.img`
  width: 275px;
  height: 335px;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
`;
const categories = ["All Products", "Women", "Men", "Bag", "Shoes", "Watches"];

const products = [
  {
    id: "1:",
    category: "Women",
    name: "Esprit Ruffle Shirt",
    price: "$16.64",
    img: "wo-1.webp",
  },
  {
    id: "2:",
    category: "Women",
    name: "Herschel supply",
    price: "$35.31",
    img: "wo-2.webp",
  },
  {
    id: "3:",
    category: "Women",
    name: "Classic Trench Coat",
    price: "$75.00",
    img: "wo-3.webp",
  },
  {
    id: "4:",
    category: "Women",
    name: "Front Pocket Jumper",
    price: "$34.75",
    img: "wo-4.webp",
  },
  {
    id: "5:",
    category: "Women",
    name: "Shirt in Stretch Cotton",
    price: "$52.66",
    img: "wo-5.webp",
  },
  {
    id: "6:",
    category: "Women",
    name: "Pieces Metallic Printed",
    price: "$18.96",
    img: "wo-6.webp",
  },
  {
    id: "7:",
    category: "Women",
    name: "Femme T-Shirt In Stripe",
    price: "$25.85",
    img: "wo-7.webp",
  },
  {
    id: "8:",
    category: "Women",
    name: "T-Shirt with Sleeve",
    price: "$18.49",
    img: "wo-8.webp",
  },
  {
    id: "9:",
    category: "Women",
    name: "Pretty Little Thing",
    price: "$54.79",
    img: "wo-9.webp",
  },
  {
    id: "10",
    category: "Women",
    name: "Pretty Little Thing",
    price: "$29.64",
    img: "wo-10.webp",
  },
  {
    id: "11",
    category: "Men",
    name: "Only Check Trouser",
    price: "$25.50",
    img: "men-1.webp",
  },
  {
    id: "12",
    category: "Men",
    name: "Herschel supply",
    price: "$63.16",
    img: "men-2.webp",
  },
  {
    id: "13",
    category: "Men",
    name: "Herschel supply",
    price: "$63.15",
    img: "men-3.webp",
  },
  {
    id: "14",
    category: "Shoes",
    name: "Converse All Star Hi Plimsolls",
    price: "$75.00",
    img: "sho-1.webp",
  },
  {
    id: "15",
    category: "Watches",
    name: "Vintage Inspired Classic",
    price: "$93.20",
    img: "wa-1.webp",
  },
  {
    id: "16",
    category: "Watches",
    name: "Mini Silver Mesh Watch",
    price: "$86.85",
    img: "wa-2.webp",
  },
];

const TabMenu = ({ toggel2 }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const initialRandomProducts = products
    .slice()
    .sort(() => Math.random() - 0.7);
  const [randomProducts] = useState(initialRandomProducts);
  return (
    <Tabs>
      <TabList>
        {categories.map((category, index) => (
          <Tab key={index}>{category}</Tab>
        ))}
      </TabList>

      {categories.map((category, index) => (
        <TabPanel key={index}>
          <div className="product-list">
            {(category === "All Products" ? randomProducts : products)
              .filter(
                (product) =>
                  category === "All Products" || product.category === category
              )
              .map((product) => (
                <div
                  key={product.id}
                  className={`product-card ${
                    selectedProductId === product.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedProductId(product.id)}
                >
                  <div className="product-img">
                    <Img
                      src={`../../images/${product.img}`}
                      alt={product.name}
                    />
                    <button onClick={toggel2}>Quick View</button>
                  </div>
                  <div className="cart-text">
                    <Link to={"/shop"}>{product.name}</Link>
                    <p>{product.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default TabMenu;
