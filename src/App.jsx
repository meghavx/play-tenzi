import { useState, useRef, useEffect } from "react"
import { Box, Flex, Text, Button, Heading, SimpleGrid } from "@chakra-ui/react"
import Die from "./components/Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import { useWindowSize } from "react-use"

export default function App() {
  const { width, height } = useWindowSize()
  const [dice, setDice] = useState(() => generateAllNewDice())
  const gameWon = dice.every(die => die.isHeld && die.value === dice[0].value)
  const newGameButtonRef = useRef(null)

  useEffect(() => {
    if (gameWon) {
      newGameButtonRef.current.focus()
    }
  }, [gameWon])

  function getRandomVal() {
    return Math.ceil(Math.random() * 6) 
  }

  function generateAllNewDice() {
    return Array(10)
      .fill(0)
      .map(() => ({
        id: nanoid(4),
        value: getRandomVal(),
        isHeld: false,
      })
    )
  }

  function rollDice() {
    setDice(currDice => currDice.map(die => 
      die.isHeld ? die : {...die, value: getRandomVal()}
    ))
  }

  function hold(id) {
    setDice(currDice => currDice.map(die =>
      die.id === id ? {...die, isHeld: !die.isHeld} : die
    ))
  }

  function resetDice() {
    setDice(generateAllNewDice())
  }

  const diceElements = dice.map(dieObj => 
    <Die key={dieObj.id} {...dieObj} handleClick={hold} />
  )

  const outerFlexProps = {
    minH: "100vh",
    align: "center", 
    justify: "center", 
    overflow: "hidden", 
    bg: "#E5E5E5",
  }

  const outerBoxProps = {
    w: ["84vw", "76vw", "540px"],
    h: ["auto", "84vh", "560px"],
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
    mb: ["2", "4"],
    fontSize: ["xs", "lg", "xl"],
    color: "#4A4E74",
    letterSpacing: "tighter",
    lineHeight: "shorter",
    textAlign: "center",
  }

  const diceGridProps = {
    mx: "auto",
    my: "2",
    columns: "5",
    gap: ["2", "4", "5"],
  }

  const rollButtonProps = {
    minW: "100px",
    maxW: "150px",
    h: "auto",
    m: ["4", "6"],
    px: "4",
    py: "10px",
    fontSize: ["sm", "lg", "xl"],
    fontWeight: ["normal", "semibold", "bold"],
    letterSpacing: "wide",
    bgColor: "#5035FF",
    onClick: gameWon ? resetDice : rollDice,
    ref: newGameButtonRef
  }

  return (
    <Flex {...outerFlexProps}>
      {gameWon && <Confetti width={width} height={height} />}
      <Box {...outerBoxProps}>
        <Flex {...innerFlexProps}>

          <Heading {...headingProps}>Tenzies</Heading>

          <Text {...subheadingProps}>
            Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
          </Text>

          <SimpleGrid {...diceGridProps}>
            {diceElements}
          </SimpleGrid>

          <Button {...rollButtonProps}>{gameWon ? "New Game" : "Roll"}</Button>
          
        </Flex>
      </Box>
    </Flex>
  )
}
