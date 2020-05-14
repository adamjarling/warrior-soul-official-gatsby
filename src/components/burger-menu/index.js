import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from 'gatsby'

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#F2CAA7",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "36px",
    width: "36px",
    right: "20px"
  },
  bmCross: {
    background: "#F2CAA7",
    height: "24px",
    width: "4px",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#0D0D0D",
    padding: "2.5em 1.5em 0",
    fontSize: "2em",
    fontFamily: "ChaosandPain-CnP"
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#F2CAA7",
    padding: "1em",
  },
  bmItem: {
    display: "block"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
  
}

const BurgerMenu = () => {
  return (
    <Menu width={400} right={true} styles={styles} outerContainerId={"outer-container"}>
      <Link to="/">Home</Link>
      <Link to="/tour-dates/">Tour Dates</Link>
      <Link to="/photos/">Photos</Link>
      <Link to="/albums/">Albums</Link>
      <Link to="/videos/">Videos</Link>
      <Link to="/bio/">Bio</Link>
      <Link to="/artwork/">Paintings and Artwork</Link>
    </Menu>
  )
}

export default BurgerMenu
