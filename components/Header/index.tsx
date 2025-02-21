"use client";

import { useLocale } from "next-intl";
import { useChangeLng } from '@/i18n/routing';
import { useSearchParams } from "next/navigation";
import { 
  Center, 
  Flex, 
  Box, 
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  useColorMode
} from "@chakra-ui/react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { CheckIcon } from "@chakra-ui/icons";
import { LANGITEM } from "@w/types/global";

const LANGS = [
  {
    name: '中文',
    value: 'zh',
  },
  {
    name: 'English',
    value: 'en'
  }
]


export default function Header(){

  const locale = useLocale();
  const { changeLang } = useChangeLng()
  const searchParams = useSearchParams().toString();

  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode)

  const changeLanguage = (item:LANGITEM) => {
    changeLang(item.value,searchParams)
  }

  return (
    <Center
      justifyContent={'space-between'}
      maxW={'1400px'}
      h={'50px'}
      px={'5'}
      margin={'0 auto'}
    >
      <Box>
        <Text 
          fontWeight={'bold'}
          fontSize={'24px'}
        >
          LOGO
        </Text>
      </Box>
      <Flex alignItems={'center'}>
        <Box mr={2}>
          <ConnectButton accountStatus="avatar" chainStatus="icon" showBalance={false} />
        </Box>
        <Menu isLazy>
          <MenuButton borderRadius={'4px'} p={'6px'} _hover={{background:'#e5e5e5'}} bgColor={'#efefef'}>
            <Flex alignItems={'center'}>
              <Image 
                src='/images/lang.png' 
                alt=''
                w="24px"
                h="24px"
              />
            </Flex>
          </MenuButton>
          <MenuList fontSize={'14px'}>
            { LANGS.map((item) => <MenuItem key={item.value} 
                  onClick={ ()=> changeLanguage(item) } 
                  sx={{
                    color: item.value === locale ? '#4e9cff' : colorMode == 'light' ? '#333' : 'white',
                    background: 'none',
                  }}
                >
                <Flex alignItems={'center'}>
                  <Text>{ item.name }</Text>
                  {
                    locale === item.value && 
                    <CheckIcon fontSize={'12px'} ml={1}></CheckIcon>
                  }
                </Flex>
              </MenuItem>)
            }
          </MenuList>
        </Menu>
        <Box ml={2} cursor={'pointer'} color={'#333'} onClick={toggleColorMode} fontSize={'16px'} borderRadius={'4px'} p={'6px'} _hover={{background:'#e5e5e5'}} bgColor={'#efefef'}>
          <Image 
              src={ `/images/${colorMode === 'light'? 'dark' : 'light'}.png`}
              alt=''
              w="24px"
              h="24px"
            />
        </Box>
      </Flex>
    </Center>
  )
}