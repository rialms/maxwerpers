export const getFromTheme = (type, variant) => props =>
  props.theme[type][variant]

export const getColor = variant => props => props.theme.colors[variant]

export const getFontSize = variant => props => props.theme.fontSizes[variant]

export const getSpacing = (variant, second) => props => {
  if (second) return props.theme.spacing[variant][second]
  else return props.theme.spacing[variant]
}

export const fontSizes = {
  caption: "0.675em",
  button: "0.775em",
  subbody: "0.875em",
  body: "1em",
  subtitle: "1.25em",
  title: "1.5em",
  subheader: "2em",
  header: "2.5em",
}

export const sizes = {
  navIcons: "1.3em",
}

export const spacing = {
  heading: "0.5em",
  nav: "3%",
  desktop: {
    sides: "15%",
  },
  mobile: {
    sides: "5%",
  },
}

const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "1280px",
  xl: "1920px",
}
export const lightTheme = {
  colors: {
    primary: "#62ea8d",
    primaryGlow: "#58d37f",
    primaryContrast: "#292929",
    body: "#FFFFFF;",
    bodyContrast: "#292929",
    bodyTint: "#b3b3b3",
    toolbar: "#f2f2f2",
  },
  type: "light",
  fontSizes,
  spacing,
  breakpoints,
  sizes,
}

export const darkTheme = {
  colors: {
    primary: "#85EEA7",
    primaryContrast: "#292929",
    primaryGlow: "#b0fbbc",
    body: "#333333;",
    bodyContrast: "#E8E8E8",
    bodyTint: "#474747",
    toolbar: "#242424",
  },
  type: "dark",
  fontSizes,
  spacing,
  breakpoints,
  sizes,
}
