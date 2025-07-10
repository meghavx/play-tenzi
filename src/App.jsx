import { 
  Box,
  Flex,
  Text,
  Button,
  Heading,
  SimpleGrid
} from "@chakra-ui/react"

import Die from './components/Die'

export default function App() {
  const numbers = [1, 2, 1, 4, 5, 3, 3, 5, 6, 1];

  const outerFlexProps = {
    minH: "100vh",
    align: "center", 
    justify: "center", 
    overflow: "hidden", 
    bg: "#E5E5E5",
  }

  const outerBoxProps = {
    w: ["90vw", "80vw", "540px"],
    h: ["auto", "auto", "560px"],
    px: "8",
    py: "12",
    bg: "#0B2434",
    borderRadius: "md",
    boxShadow: "xl",
  }

  const innerFlexProps = {
    direction: "column",
    align: "center",
    w: "100%",
    h: "100%",
    px: ["4", "6", "8"],
    py: ["6", "8", "12"],
    borderRadius: "xl",
    bg: "#F5F5F5",
  }

  const headingProps = {
    size: ["2xl", "3xl", "4xl"],
    fontWeight: "700",
    letterSpacing: "wide",
    textAlign: "center",
    color: "#2B283A",
  }

  const subheadingProps = {
    px: ["6", "8", "12"],
    fontSize: ["md", "lg", "xl"],
    color: "#4A4E74",
    letterSpacing: "tighter",
    lineHeight: "shorter",
    textAlign: "center",
  }

  const dieGridProps = {
    m: "6",
    columns: ["3", "5"],
    gap: ["2", "4", "5"],
  }

  const rollButtonProps = {
    m: ["2", "4"],
    w: ["80px", "100px", "120px"],
    h: ["40px", "44px", "48px"],
    fontSize: ["md", "lg", "xl"],
    fontWeight: ["semibold", "bold"],
    letterSpacing: "wide",
    bgColor: "#5035FF",
  }

  return (
    <Flex {...outerFlexProps}>
      <Box {...outerBoxProps}>
        <Flex {...innerFlexProps}>

          <Heading {...headingProps}>Tenzies</Heading>

          <Text {...subheadingProps}>
            Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
          </Text>

          <SimpleGrid {...dieGridProps}>
            {numbers.map((num, index) => (<Die key={index} val={num} />))}
          </SimpleGrid>

          <Button {...rollButtonProps}>Roll</Button>
          
        </Flex>
      </Box>
    </Flex>
  )
}
