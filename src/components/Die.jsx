import { Box } from "@chakra-ui/react"
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react"

export default function Die({ id, value, isHeld, handleClick }) {
  const DieFaces = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]
  const DieFace = DieFaces[value - 1]

  const boxProps = {
    as: "button",
    cursor: "pointer",
    onClick: () => handleClick(id),
    "aria-label": `Die with value ${value}, ${isHeld ? "held" : "not held"}`,
    "aria-pressed": isHeld,
  }

  const diceProps = {
    size: [36, 52, 60],
    color: "#2B283A",
    fill: !isHeld ? "#FFF" : "#59E391",
  }
  
  return (
    <Box {...boxProps}>
      <DieFace {...diceProps} />
    </Box>
  )
}