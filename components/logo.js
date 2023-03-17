import Link from 'next/link'
import '@fontsource/m-plus-rounded-1c/800.css'
import FootprintIcon from './icons/footprint'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <FootprintIcon />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="'M PLUS Rounded 1c'"
          fontWeight="bold"
          ml={3}
        >
          Furkan Arda
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
