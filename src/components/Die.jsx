import { Box } from "@chakra-ui/react"
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react"
import { getDieBoxProps, getDieFaceProps } from "./ui/layoutProps"

export default function Die({ id, value, isHeld, handleClick }) {
  const DieFaces = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]
  const DieFace = DieFaces[value - 1]
  
  return (
    <Box {...getDieBoxProps({ id, value, isHeld, handleClick })}>
      <DieFace {...getDieFaceProps({ isHeld })} />
    </Box>
  )
}