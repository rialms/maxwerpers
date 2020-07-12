import React, { useContext, useState } from "react"
import styled, { useTheme } from "styled-components"
import { useIntl, changeLocale } from "gatsby-plugin-intl"
import { KeyboardArrowDown } from "@styled-icons/material-rounded/KeyboardArrowDown"
import { Language } from "@styled-icons/material/Language"
import { animateScroll as scroll, scroller } from "react-scroll"

import logoDark from "../../images/logo_dark.svg"
import logoLight from "../../images/logo_light.svg"
import { SubText } from "../atoms/Typography"
import ThemeToggle from "../atoms/ThemeToggle"
import LanguageSwitch from "../molecules/LanguageSwitch"
import ThemeContext from "../../utils/ThemeContext"

const Navigation = styled.nav`
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`

const Top = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.mobile.sides};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.75);
`

const Logo = styled.img`
  height: 3vh;
`

const TopItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Bottom = styled.div`
  position: fixed;
  overflow: hidden;
  height: 3.5em;
  z-index: 1;
  bottom: 0.25em;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.colors.body};
  box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.75);
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const IconImage = styled.svg`
  fill: ${({ theme }) => theme.colors.primary};
  fill: ${props =>
    props.selectedItem === props.position
      ? props.theme.colors.primary
      : props.theme.colors.bodyContrast};

  width: 24px;
  height: 24px;
  flex-shrink: 0;
`

const Mobile = ({ navlinks }) => {
  const intl = useIntl()
  const l = ["Deutsch", "English", "Francais"]
  const theme = useTheme()
  const themeMode = useContext(ThemeContext)

  const [selectedItem, setSelectedItem] = useState(0)

  const scrollTo = (label, index) => {
    const options = {
      duration: 300,
      delay: 0,
      smooth: "easeInOutQuart",
    }
    if (label === "home") {
      scroll.scrollToTop(options)
    } else {
      scroller.scrollTo(label, options)
    }
    setSelectedItem(index)
  }

  return (
    <Navigation>
      <Top>
        <Logo
          src={themeMode.theme === "dark" ? logoDark : logoLight}
          alt="logo-nav"
        />
        <TopItems>
          <LanguageSwitch
            changeLanguage={changeLocale}
            currentLanguage={intl.locale}
            languages={l}
            space={"6vh"}
            iconLeft={<Language />}
            iconRight={<KeyboardArrowDown />}
            iconSize="1.25em"
            iconColor={theme.colors.bodyContrast}
            dropdownBackground={theme.colors.bodyTint}
            dropdownHoverColor={theme.colors.toolbarBackground}
          />
          <ThemeToggle iconSize="1.25em" />
        </TopItems>
      </Top>
      <Bottom>
        {navlinks.map((link, index) => (
          <Item key={index} onClick={() => scrollTo(link.path, index)}>
            <IconImage selectedItem={selectedItem} position={index}>
              <path d={link.icon} />
            </IconImage>
            <SubText variant="a" text={link.name} />
          </Item>
        ))}
      </Bottom>
    </Navigation>
  )
}

export default Mobile
