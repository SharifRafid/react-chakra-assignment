"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleType = exports.CardMain = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const AuctionTag_component_1 = require("./AuctionTag.component");
const SaleTag_component_1 = require("./SaleTag.component");
const fa_1 = require("react-icons/fa");
function CardMain(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Box, { w: '350px', h: '500px', padding: 5, borderRadius: 'lg', bgColor: "#112135" },
            react_1.default.createElement(react_2.HStack, { w: 'full', spacing: 'auto' },
                react_1.default.createElement(react_2.Tag, { borderColor: '#4b526b', size: 'lg', variant: 'outline', borderRadius: 'full' },
                    react_1.default.createElement(react_2.TagLabel, { padding: '1' }, "Hot Deal")),
                props.saleType == SaleType.Auction ?
                    (0, AuctionTag_component_1.AuctionTag)() :
                    (0, SaleTag_component_1.SaleTag)()),
            react_1.default.createElement(react_2.Image, { src: props.image, borderRadius: 'md', objectFit: 'cover', marginTop: 3, h: 280 }),
            react_1.default.createElement(react_2.HStack, { textColor: "white" },
                react_1.default.createElement("b", null, props.userId),
                react_1.default.createElement(react_2.Icon, { as: fa_1.FaHeart })))));
}
exports.CardMain = CardMain;
var SaleType;
(function (SaleType) {
    SaleType[SaleType["Auction"] = 0] = "Auction";
    SaleType[SaleType["Sale"] = 1] = "Sale";
})(SaleType = exports.SaleType || (exports.SaleType = {}));
//# sourceMappingURL=Card.component.js.map