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
const CountDownTimer_component_1 = __importDefault(require("./CountDownTimer.component"));
function CardMain(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Box, { fontSize: { sm: 'md', base: 'xs' }, w: { sm: '400px', base: '300px' }, h: { sm: '620px', base: '550px' }, padding: 6, borderRadius: 'lg', bgColor: "#112135" },
            react_1.default.createElement(react_2.HStack, { w: 'full', spacing: 'auto' },
                react_1.default.createElement(react_2.Tag, { borderColor: '#4b526b', size: { base: 'md', sm: 'lg' }, bgColor: '#151a2e', variant: 'outline', borderRadius: 'full' },
                    react_1.default.createElement(react_2.TagLabel, { padding: '1' },
                        react_1.default.createElement("b", null, "Hot Deal"))),
                props.saleType == SaleType.Auction ?
                    (0, AuctionTag_component_1.AuctionTag)() :
                    (0, SaleTag_component_1.SaleTag)()),
            react_1.default.createElement(react_2.Image, { src: props.image, borderRadius: 'md', objectFit: 'cover', marginTop: 5, h: { sm: 280, base: 220 } }),
            react_1.default.createElement(react_2.HStack, { textColor: "white", spacing: 'auto', mt: 4, fontSize: 20 },
                react_1.default.createElement(react_2.Box, { textColor: "#b0b5bc" }, props.userId),
                react_1.default.createElement(react_2.Center, null,
                    react_1.default.createElement(react_2.Icon, { w: 6, h: 6, color: props.likedByThisUser ?
                            "#ff0c80" : "#474761", as: fa_1.FaHeart }),
                    react_1.default.createElement(react_2.Box, { paddingLeft: 2 },
                        react_1.default.createElement("b", null, props.likes)))),
            react_1.default.createElement(react_2.Box, { mt: 1, fontSize: { sm: 'md', base: 'md' }, textColor: "#466fa1", textAlign: 'left' }, props.userType),
            react_1.default.createElement(react_2.Flex, { mt: 3 },
                props.saleType == SaleType.Auction ?
                    react_1.default.createElement(react_2.Box, { mt: 4, marginEnd: 2, w: 'auto', h: 'auto', bgGradient: 'linear(to-b, #314174, #391c82)' },
                        react_1.default.createElement(react_2.Center, null,
                            react_1.default.createElement(react_2.Box, { w: 'full', h: 'auto', bgColor: "#151a2e", margin: .5, paddingLeft: 3, paddingRight: 3, paddingTop: 2, paddingBottom: 2, color: "white" },
                                react_1.default.createElement(react_2.Box, { textColor: "#35a024", textAlign: 'left' },
                                    react_1.default.createElement("b", null, "HIGHEST BID")),
                                react_1.default.createElement(react_2.Box, { textColor: "white", textAlign: 'left' },
                                    react_1.default.createElement("b", null,
                                        "$",
                                        props.originalPrice))))) :
                    react_1.default.createElement(react_2.Flex, { flexDirection: 'column' },
                        react_1.default.createElement(react_2.Tag, { size: 'md', borderRadius: 'full', variant: 'solid', colorScheme: 'green', w: '80px', textAlign: 'center', zIndex: 5, ml: '20px', marginBottom: -2 },
                            react_1.default.createElement(react_2.TagLabel, null,
                                react_1.default.createElement("b", null, props.offerTitle))),
                        react_1.default.createElement(react_2.Box, { marginEnd: 2, w: 'auto', h: 'auto', bgGradient: 'linear(to-b, #314174, #391c82)' },
                            react_1.default.createElement(react_2.Center, null,
                                react_1.default.createElement(react_2.Box, { w: '100px', h: 'auto', bgColor: "#151a2e", margin: .5, paddingLeft: 3, paddingRight: 3, paddingTop: { sm: "2", base: "3.5" }, fontSize: 'md', paddingBottom: 2, color: "white" },
                                    react_1.default.createElement(react_2.Box, { textColor: "#ba3e40", textAlign: 'left' },
                                        react_1.default.createElement(react_2.Text, { as: 's' },
                                            react_1.default.createElement("b", null,
                                                "$",
                                                props.originalPrice))),
                                    react_1.default.createElement(react_2.Box, { textColor: "white", textAlign: 'left' },
                                        react_1.default.createElement("b", null,
                                            "$",
                                            props.offerPrice)))))),
                react_1.default.createElement(react_2.Box, { flex: 1, w: 'auto', h: 'auto', mt: 4, bgGradient: 'linear(to-b, #634728, #6e2e23)' },
                    react_1.default.createElement(react_2.Center, null,
                        react_1.default.createElement(react_2.Box, { w: 'full', h: 'auto', bgColor: "#151a2e", margin: .5, paddingLeft: 3, paddingRight: 3, paddingTop: 2, paddingBottom: 2, color: "white" },
                            react_1.default.createElement(react_2.Box, { textColor: "#8aa9cf" },
                                react_1.default.createElement("b", null, props.saleType == SaleType.Sale ? "FLASH DEAL ENDS IN" : "AUCTION ENDS IN")),
                            react_1.default.createElement(CountDownTimer_component_1.default, { duration: props.endDateMilliseconds }))))),
            react_1.default.createElement(react_2.Flex, { mt: 5, alignItems: 'center' },
                props.saleType == SaleType.Sale ?
                    react_1.default.createElement(react_2.Button, { flex: 1, variant: 'outline', borderRadius: 0, fontSize: { sm: 'xl', base: 'sm' }, me: 2, colorScheme: 'white', textColor: 'white', p: 6, bgColor: '#112135' }, "ADD TO CART") : null,
                react_1.default.createElement(react_2.Button, { flex: 1, bgColor: '#1571f8', textColor: 'white', fontSize: { sm: 'xl', base: 'sm' }, p: 6, borderRadius: 0 }, props.saleType == SaleType.Sale ? "BUY NOW" : "BID NOW")))));
}
exports.CardMain = CardMain;
var SaleType;
(function (SaleType) {
    SaleType[SaleType["Auction"] = 0] = "Auction";
    SaleType[SaleType["Sale"] = 1] = "Sale";
})(SaleType = exports.SaleType || (exports.SaleType = {}));
//# sourceMappingURL=Card.component.js.map