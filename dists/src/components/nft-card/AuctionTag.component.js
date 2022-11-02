"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionTag = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
function AuctionTag() {
    return react_2.default.createElement(react_1.Box, { w: 'auto', h: 'auto', borderRadius: 'full', bgGradient: 'linear(to-b, #634728, #6e2e23)' },
        react_2.default.createElement(react_1.Center, null,
            react_2.default.createElement(react_1.Box, { w: 'auto', h: 'auto', borderRadius: 'full', bgColor: "#151a2e", margin: .5, paddingLeft: '5', paddingRight: '5', paddingTop: 1, paddingBottom: 1, color: "white" },
                react_2.default.createElement("b", null, "AUCTION"))));
}
exports.AuctionTag = AuctionTag;
//# sourceMappingURL=AuctionTag.component.js.map