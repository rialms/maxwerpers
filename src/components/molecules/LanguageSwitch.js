import React, { useState } from "react"
import styled from "styled-components"

import { DropDown, Text, SvgIcon } from "atoms"

import { Language, Language2 } from "icons"

const LanguageSwitch = ({
  languages,
  currentLanguage,
  changeLanguage,
  ...rest
}) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const switchLanguage = item => {
    //gets the language code 'en, de ...' from selected language
    changeLanguage(
      languages
        .find(language => language === item)
        .toLowerCase()
        .slice(0, 2)
    )
  }
  return (
    <Wrapper onClick={() => setOpenDropdown(!openDropdown)} {...rest}>
      <LanguageIcon viewBox="0 0 640 512" path={Language} />
      <CurrentLanguage>
        {currentLanguage === "de" ? "Deutsch" : "English"}
      </CurrentLanguage>
      <DropDown
        parentToggle={openDropdown}
        items={languages}
        getItem={switchLanguage}
        icon={Language2}
      />
    </Wrapper>
  )
}

export default LanguageSwitch

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const LanguageIcon = styled(SvgIcon)`
  height: ${props => props.theme.sizes.navIcons};
  fill: ${props => props.theme.colors.bodyContrast};
`

const CurrentLanguage = styled(Text)`
  text-transform: capitalize;
  margin: 0 0.1em 0 0.5em;
`
