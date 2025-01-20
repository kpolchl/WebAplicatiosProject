const mongoose = require("mongoose");

const OrderHistoryShema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    orderContents: { type: [], required: true },
    value: { type: Number, required: true },
    image: { type: String, required: true, default: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1B734GTDD8b18bKX4jq2iAHaHa%26pid%3DApi&f=1&ipt=4ecb6390d5bd5baf5fc59970147078ab6da6c2f621a7a666880294c487c9d900&ipo=images" },
  },
  { timestamps: true },
);

const OrderHistory = mongoose.model("OrderHistory", OrderHistoryShema);

module.exports = OrderHistory;
