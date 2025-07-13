import { useState, useRef, useEffect } from "react"
import { nanoid } from "nanoid"
import { useWindowSize } from "react-use"
import Confetti from "react-confetti"

import { 
  Box, 
  Flex, 
  Text, 
  Button, 
  Heading, 
  SimpleGrid 
} from "@chakra-ui/react"

import Die from "./Die"

import {
  outerFlexProps, 
  outerBoxProps, 
  innerFlexProps, 
  headingProps, 
  subheadingProps, 
  diceGridProps, 
  getRollButtonProps 
} from "./layoutProps.js"

export default function App() {
  const { width, height } = useWindowSize()
  const [dice, setDice] = useState(() => generateAllNewDice())
  const gameWon = dice.every(die => die.isHeld && die.value === dice[0].value)
  const newGameButtonRef = useRef(null)

  useEffect(() => {
    if (gameWon) newGameButtonRef.current.focus()
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

  function holdDie(id) {
    setDice(currDice => currDice.map(die =>
      die.id === id ? {...die, isHeld: !die.isHeld} : die
    ))
  }

  function resetDice() {
    setDice(generateAllNewDice())
  }

  const diceElements = dice.map(dieObj => 
    <Die key={dieObj.id} {...dieObj} handleClick={holdDie} />
  )

  return (
    <Flex {...outerFlexProps}>

      {gameWon && <Confetti width={width} height={height} />}

      <Box {...outerBoxProps}>

        <Flex {...innerFlexProps}>

          <Heading {...headingProps}>Tenzies</Heading>

          <Text {...subheadingProps}>
            {gameWon 
              ? `Woohoo! You won! 🎉 
              Want to roll again? Click on 
              New Game!`
              : `Roll until all dice are the same. Click
                each die to freeze it at its current
                value between rolls.`
              }
          </Text>

          <SimpleGrid {...diceGridProps}>{diceElements}</SimpleGrid>

          <Button {...getRollButtonProps({ gameWon, rollDice, resetDice, newGameButtonRef})}>
            {gameWon ? "New Game" : "Roll"}
          </Button>

        </Flex>

      </Box>

    </Flex>
  )
}
