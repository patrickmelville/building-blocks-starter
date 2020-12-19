import Typography from "typography"
// import kirkhamTheme from "typography-theme-kirkham"
// const typography = new Typography(kirkhamTheme)
import oceanBeachTheme from "typography-theme-ocean-beach"

oceanBeachTheme.overrideThemeStyles = ({ rhythm }, options) => ({})

const typography = new Typography(oceanBeachTheme)

// export const rhythm = typography.rhythm
export const { scale, rhythm, options } = typography
export default typography
