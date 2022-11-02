import React from "react";
import { Box, Text, Stack, HStack, Tag, TagLabel, Center, Image, Icon, Flex, Button } from "@chakra-ui/react"
import { AuctionTag } from "./AuctionTag.component";
import { SaleTag } from "./SaleTag.component";
import { FaHeart } from 'react-icons/fa';
import CountDownTimer from "./CountDownTimer.component";

export function CardMain(props: cardProps) {
  return (
    <>
      <Box
        fontSize={{ sm: 'md', base: 'xs' }}
        w={{ sm: '400px', base: '300px' }} h={{ sm: '620px', base: '550px' }}
        padding={6}
        borderRadius='lg'
        bgColor={"#112135"}>
        <HStack w={'full'} spacing='auto'>
          <Tag
            borderColor={'#4b526b'}
            size={{ base: 'md', sm: 'lg' }}
            bgColor={'#151a2e'}
            variant={'outline'}
            borderRadius={'full'}>
            <TagLabel padding='1'>
              <b>Hot Deal</b>
            </TagLabel>
          </Tag>
          {props.saleType == SaleType.Auction ?
            AuctionTag() :
            SaleTag()}
        </HStack>
        <Image src={props.image}
          borderRadius='md'
          objectFit='cover'
          marginTop={5}
          h={{ sm: 280, base: 220 }} />
        <HStack textColor={"white"} spacing='auto'
          mt={4}
          fontSize={20}>
          <Box textColor={"#b0b5bc"}>
            {props.userId}
          </Box>
          <Center>
            <Icon
              w={6}
              h={6}
              color={props.likedByThisUser ?
                "#ff0c80" : "#474761"}
              as={FaHeart} />
            <Box paddingLeft={2}>
              <b>{props.likes}</b>
            </Box>
          </Center>
        </HStack>
        <Box mt={1}
          fontSize={{ sm: 'md', base: 'md' }}
          textColor={"#466fa1"} textAlign='left'>
          {props.userType}
        </Box>
        <Flex mt={3}>
          {props.saleType == SaleType.Auction ?
            <Box
              mt={4}
              marginEnd={2}
              w='auto'
              h='auto'
              bgGradient='linear(to-b, #314174, #391c82)'
            >
              <Center>
                <Box
                  w='full'
                  h='auto'
                  bgColor="#151a2e"
                  margin={.5}
                  paddingLeft={3}
                  paddingRight={3}
                  paddingTop={2}
                  paddingBottom={2}
                  color="white"
                >
                  <Box textColor={"#35a024"} textAlign='left'><b>HIGHEST BID</b></Box>
                  <Box textColor={"white"} textAlign='left'><b>${props.originalPrice}</b></Box>
                </Box>
              </Center>
            </Box> :
            <Flex flexDirection={'column'}>
              <Tag
                size={'md'}
                borderRadius='full'
                variant='solid'
                colorScheme='green'
                w={'80px'}
                textAlign='center'
                zIndex={5}
                ml='20px'
                marginBottom={-2}
              >
                <TagLabel><b>{props.offerTitle}</b></TagLabel>
              </Tag>
              <Box
                marginEnd={2}
                w='auto'
                h='auto'
                bgGradient='linear(to-b, #314174, #391c82)'
              >
                <Center>
                  <Box
                    w='100px'
                    h='auto'
                    bgColor="#151a2e"
                    margin={.5}
                    paddingLeft={3}
                    paddingRight={3}
                    paddingTop={{ sm: "2", base: "3.5" }}
                    fontSize={'md'}
                    paddingBottom={2}
                    color="white"
                  >
                    <Box textColor={"#ba3e40"} textAlign='left'><Text as='s'><b>${props.originalPrice}</b></Text></Box>
                    <Box textColor={"white"} textAlign='left'><b>${props.offerPrice}</b></Box>
                  </Box>
                </Center>
              </Box>
            </Flex>}
          <Box
            flex={1}
            w='auto'
            h='auto'
            mt={4}
            bgGradient='linear(to-b, #634728, #6e2e23)'
          >
            <Center>
              <Box
                w='full'
                h='auto'
                bgColor="#151a2e"
                margin={.5}
                paddingLeft={3}
                paddingRight={3}
                paddingTop={2}
                paddingBottom={2}
                color="white"
              >
                <Box textColor={"#8aa9cf"}><b>{props.saleType == SaleType.Sale ? "FLASH DEAL ENDS IN" : "AUCTION ENDS IN"}</b></Box>
                <CountDownTimer duration={props.endDateMilliseconds} />
              </Box>
            </Center>
          </Box>
        </Flex>
        <Flex mt={5} alignItems='center'>
          {props.saleType == SaleType.Sale ?
            <Button
              flex={1}
              variant={'outline'}
              borderRadius={0}
              fontSize={{ sm: 'xl', base: 'sm' }}
              me={2}
              colorScheme={'white'}
              textColor={'white'}
              p={6}
              bgColor={'#112135'}>ADD TO CART</Button> : null
          }
          <Button flex={1}
            bgColor={'#1571f8'}
            textColor={'white'}
            fontSize={{ sm: 'xl', base: 'sm' }}
            p={6}
            borderRadius={0}>
            {props.saleType == SaleType.Sale ? "BUY NOW" : "BID NOW"}</Button>
        </Flex>
      </Box>
    </>
  );
}

export enum SaleType {
  Auction,
  Sale
}
type cardProps = {
  hotDeal: boolean,
  saleType: SaleType,
  image: string,
  userId: string,
  userType: string,
  endDateMilliseconds: number,
  highestBid: number,
  offerTitle?: string,
  offerPrice: number,
  originalPrice: number,
  likes: number,
  likedByThisUser: boolean
}

