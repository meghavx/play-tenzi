export const outerFlexProps = {
  w: "auto",
  h: "100vh",
  pt: ["33%", "0"], 
  align: ["start", "center"],
  justify: "center", 
  overflow: "hidden", 
  bg: ["#59E391", "#E5E5E5"],
}

export const outerBoxProps = {
  w: ["90vw", "540px"],
  h: ["auto", "560px"],
  px: ["6", "8"],
  py: ["8", "12"],
  bg: "#0B2434",
  borderRadius: ["sm", "md"],
  boxShadow: "xl",
}

export const innerFlexProps = {
  direction: "column",
  align: "center",
  w: "100%",
  h: "100%",
  px: ["4", "6", "8"],
  py: ["6", "8", "12"],
  borderRadius: "xl",
  bg: "#F5F5F5",
}

export const headingProps = {
  size: ["2xl", "3xl", "4xl"],
  mt: ["4", "auto"],
  fontWeight: "700",
  letterSpacing: "wide",
  textAlign: "center",
  color: "#2B283A",
}

export const subheadingProps = {
  px: ["6", "8", "12"],
  mb: "4",
  fontSize: ["sm", "lg", "xl"],
  color: "#4A4E74",
  letterSpacing: "tighter",
  lineHeight: "shorter",
  textAlign: "center",
}

export const diceGridProps = {
  mx: "auto",
  my: ["4", "2"],
  columns: "5",
  gap: ["2", "4", "5"],
}

export const getDieBoxProps = ({ id, value, isHeld, handleClick }) => ({
  as: "button",
  cursor: "pointer",
  onClick: () => handleClick(id),
  "aria-label": `Die with value ${value}, ${isHeld ? "held" : "not held"}`,
  "aria-pressed": isHeld,
})

export const getDieFaceProps = ({ isHeld }) => ({
  size: [36, 52, 60],
  color: "#2B283A",
  fill: !isHeld ? "#FFF" : "#59E391",
})

export const getRollButtonProps = ({ gameWon, rollDice, resetDice, newGameButtonRef }) => ({
  minW: ["auto", "100px"],
  maxW: ["auto", "150px"],
  h: "auto",
  m: ["4", "6"],
  px: "8",
  py: "10px",
  fontSize: ["sm", "lg", "xl"],
  fontWeight: ["normal", "semibold", "bold"],
  letterSpacing: "wide",
  bgColor: "#5035FF",
  onClick: gameWon ? resetDice : rollDice,
  ref: newGameButtonRef
})
