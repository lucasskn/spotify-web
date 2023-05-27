
import { extendTheme } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

const theme = extendTheme({
  colors: {
    neutral: {
      '200': '#FF0000',
      '600': '#595959',
      '700': '#404040',
      '750': '#414141',
    },
    spotifygreen: {
      '500': '#00A34A'
    }
  },
})

export default theme