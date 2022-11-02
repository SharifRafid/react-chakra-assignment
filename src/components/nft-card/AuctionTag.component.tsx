import { Box, Center } from "@chakra-ui/react";
import React from "react";

export function AuctionTag(): React.ReactNode {
  return <Box
    w='auto'
    h='auto'
    borderRadius={'full'}
    bgGradient='linear(to-b, #634728, #6e2e23)'
  >
    <Center>
      <Box
        w='auto'
        h='auto'
        borderRadius={'full'}
        bgColor="#151a2e"
        margin={.5}
        paddingLeft='5'
        paddingRight='5'
        paddingTop={1}
        paddingBottom={1}
        color="white"
      >
        <b>AUCTION</b>
      </Box>
    </Center>
  </Box>;
}