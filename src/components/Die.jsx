import { Button } from "@chakra-ui/react"

export default function Die({ id, value, isHeld, handleClick }) {
  const dieButtonProps = {
    w: ["50px", "55px", "60px"],
    h: ["50px", "55px", "60px"],
    bg: !isHeld ? "#FFF" : "#59E391",
    color: "#2B283A",
    fontSize: ["xl", "2xl"], 
    fontWeight: "bold",
    borderRadius: "xl", 
    shadow: "md",
    onClick: () => handleClick(id),
  }

  return (
    <Button {...dieButtonProps}>{value}</Button>
  )
}