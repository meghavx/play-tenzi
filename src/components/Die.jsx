import { Button } from "@chakra-ui/react"

export default function Die({ id, value, isHeld, handleClick }) {
  const dieButtonProps = {
    w: ["40px", "50px", "60px"],
    h: ["40px", "50px", "60px"],
    bg: !isHeld ? "#FFF" : "#59E391",
    color: "#2B283A",
    fontSize: ["md", "xl", "2xl"], 
    fontWeight: "bold",
    borderRadius: ["md", "lg", "xl"], 
    shadow: "md",
    onClick: () => handleClick(id),
  }

  return (
    <Button {...dieButtonProps}>{value}</Button>
  )
}