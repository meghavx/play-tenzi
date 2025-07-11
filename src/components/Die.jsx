import { Button } from "@chakra-ui/react"

export default function Die({ value }) {
  const dieButtonProps = {
    w: ["50px", "55px", "60px"],
    h: ["50px", "55px", "60px"],
    bg: "white",
    color: "#2B283A",
    fontSize: ["xl", "2xl"], 
    fontWeight: "bold",
    borderRadius: "xl", 
    shadow: "md",
  }

  return (
    <Button {...dieButtonProps}>{value}</Button>
  )
}