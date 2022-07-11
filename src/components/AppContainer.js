import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import { ThemeProvider } from "styled-components"
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
}

export default function AppContainer({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>{children}</ChakraProvider>
    </ThemeProvider>
  )
}
