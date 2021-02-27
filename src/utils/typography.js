import Typography from "typography"
// import kirkhamTheme from "typography-theme-kirkham"
// const typography = new Typography(kirkhamTheme)
import oceanBeachTheme from "typography-theme-ocean-beach"

oceanBeachTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    backgroundImage: "unset",
    textShadow: "none",
  },
  "h1,h2,h3,h4,h5,h6": {
    marginTop: rhythm(2/3),
    marginBottom: rhythm(1/3),
  },
})

const typography = new Typography(oceanBeachTheme)

export const { scale, rhythm, options } = typography
export default typography
