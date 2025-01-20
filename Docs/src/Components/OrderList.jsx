import React from "react";
import OrderCard from "./OrderCard";

const orders = [
  {
    _id: "678da6b3e21e5cad31c8335f",
    userId: "678d8f07558c6bbd3a494f85",
    orderContents: ["678d35eed61f753b25118fe0", "678d36aed61f753b25118fe4"],
    value: 10,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1B734GTDD8b18bKX4jq2iAHaHa%26pid%3DApi&f=1&ipt=4ecb6390d5bd5baf5fc59970147078ab6da6c2f621a7a666880294c487c9d900&ipo=images",
    createdAt: "2025-01-20T01:28:19.153Z",
    updatedAt: "2025-01-20T01:28:19.153Z",
    __v: 0,
  },
  {
    _id: "678dae3fe21e5cad31c83372",
    userId: "678d8f07558c6bbd3a494f85",
    orderContents: ["Mens Casual Premium Slim Fit T-Shirts "],
    value: 10,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1B734GTDD8b18bKX4jq2iAHaHa%26pid%3DApi&f=1&ipt=4ecb6390d5bd5baf5fc59970147078ab6da6c2f621a7a666880294c487c9d900&ipo=images",
    createdAt: "2025-01-20T02:00:31.764Z",
    updatedAt: "2025-01-20T02:00:31.764Z",
    __v: 0,
  },
  {
    _id: "678daf80e21e5cad31c83375",
    userId: "678d8f07558c6bbd3a494f85",
    orderContents: ["Mens Casual Premium Slim Fit T-Shirts "],
    value: 10,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1B734GTDD8b18bKX4jq2iAHaHa%26pid%3DApi&f=1&ipt=4ecb6390d5bd5baf5fc59970147078ab6da6c2f621a7a666880294c487c9d900&ipo=images",
    createdAt: "2025-01-20T02:05:52.588Z",
    updatedAt: "2025-01-20T02:05:52.588Z",
    __v: 0,
  },
  {
    _id: "678db4f4e21e5cad31c833a3",
    userId: "678d8f07558c6bbd3a494f85",
    orderContents: ["Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"],
    value: 109.95,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1B734GTDD8b18bKX4jq2iAHaHa%26pid%3DApi&f=1&ipt=4ecb6390d5bd5baf5fc59970147078ab6da6c2f621a7a666880294c487c9d900&ipo=images",
    createdAt: "2025-01-20T02:29:08.540Z",
    updatedAt: "2025-01-20T02:29:08.540Z",
    __v: 0,
  },
  {
    _id: "678e24f71331c45206862d24",
    userId: "678d8f07558c6bbd3a494f85",
    orderContents: ["Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"],
    value: 109.95,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1B734GTDD8b18bKX4jq2iAHaHa%26pid%3DApi&f=1&ipt=4ecb6390d5bd5baf5fc59970147078ab6da6c2f621a7a666880294c487c9d900&ipo=images",
    createdAt: "2025-01-20T10:27:03.937Z",
    updatedAt: "2025-01-20T10:27:03.937Z",
    __v: 0,
  },
];

const OrderList = ({ orderList }) => {
  if (!orderList || orderList.length === 0) {
    return <p>No orders available.</p>;
  }

  return (
    <>
      <OrderCard image={"sdadsa"} createdAt={"2025-01-20T02:29:08.540Z"} value={12} /> /
      <div className="d-flex flex-wrap justify-content-start">
        {orderList.map((order) => (
          <div key={order._id} className="m-3">
            <OrderCard
              image={order.image}
              createdAt={order.createdAt}
              value={order.value}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderList;
