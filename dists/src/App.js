"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const react_1 = __importDefault(require("react"));
const Card_component_1 = require("./components/nft-card/Card.component");
const react_2 = require("@chakra-ui/react");
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(react_2.Center, { minH: '100vh', h: 'auto', bg: "#091320" },
            react_1.default.createElement(react_2.Stack, { direction: ['column', 'row'], spacing: '24px', paddingTop: 10, paddingBottom: 10 },
                react_1.default.createElement(Card_component_1.CardMain, { hotDeal: true, saleType: Card_component_1.SaleType.Auction, image: "https://picsum.photos/536/354", userId: "#B8/452342", userType: "Enoch Citizen", endDateMilliseconds: 49208438904, highestBid: 100, offerActive: false, offerPrice: 100, originalPrice: 200, likes: 70, likedByThisUser: false }),
                react_1.default.createElement(Card_component_1.CardMain, { hotDeal: true, saleType: Card_component_1.SaleType.Auction, image: "https://picsum.photos/536/354", userId: "#B8/452342", userType: "Enoch Citizen", endDateMilliseconds: 49208438904, highestBid: 100, offerActive: false, offerPrice: 100, originalPrice: 200, likes: 70, likedByThisUser: false }),
                react_1.default.createElement(Card_component_1.CardMain, { hotDeal: true, saleType: Card_component_1.SaleType.Sale, image: "https://picsum.photos/536/354", userId: "#B8/452342", userType: "Enoch Citizen", endDateMilliseconds: 49208438904, highestBid: 100, offerActive: false, offerPrice: 100, originalPrice: 200, likes: 70, likedByThisUser: false })))));
}
exports.default = App;
//# sourceMappingURL=App.js.map