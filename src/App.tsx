import './App.css';
import React from 'react';
import { CardMain, SaleType } from './components/nft-card/Card.component';
import { Box, Center, Flex, Stack, Wrap } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Center minH={'100vh'} h={'auto'} bg={"#091320"}>
        <Wrap direction={['column', 'row']} spacing='24px' padding={{sm:10, base:5}}>
          <CardMain hotDeal
            saleType={SaleType.Auction}
            image={"https://picsum.photos/536/354"}
            userId={"#B8/452342"}
            userType={"Enoch Citizen"}
            endDateMilliseconds={208438904}
            highestBid={100}
            offerPrice={100}
            originalPrice={200}
            likes={70}
            likedByThisUser={false} />
          <CardMain hotDeal
            saleType={SaleType.Auction}
            image={"https://picsum.photos/536/354"}
            userId={"#B8/452342"}
            userType={"Enoch Citizen"}
            endDateMilliseconds={2204438904}
            highestBid={100}
            offerPrice={100}
            originalPrice={200}
            likes={70}
            likedByThisUser={false} />
          <CardMain hotDeal
            saleType={SaleType.Sale}
            image={"https://picsum.photos/536/354"}
            userId={"#B8/452342"}
            userType={"Enoch Citizen"}
            endDateMilliseconds={1440438904}
            highestBid={100}
            offerTitle={"10% Off"}
            offerPrice={100}
            originalPrice={200}
            likes={70}
            likedByThisUser={true} />
        </Wrap>

      </Center>
    </div>
  );
}

export default App;
