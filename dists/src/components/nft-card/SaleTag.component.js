"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleTag = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
function SaleTag() {
    return react_2.default.createElement(react_1.Box, { w: 'auto', h: 'auto', borderRadius: 'full', bgGradient: 'linear(to-b, #314174, #391c82)' },
        react_2.default.createElement(react_1.Center, null,
            react_2.default.createElement(react_1.Box, { w: 'auto', h: 'auto', borderRadius: 'full', bgColor: "#151a2e", margin: .5, paddingLeft: '5', paddingRight: '5', paddingTop: 1, paddingBottom: 1, color: "white" },
                react_2.default.createElement("b", null, "SALE"))));
}
exports.SaleTag = SaleTag;
//# sourceMappingURL=SaleTag.component.js.map