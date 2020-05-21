import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'
Wordpress2016.baseFontSize = '20px';
Wordpress2016.googleFonts.push({
  name  : "Lora",
  styles: ["400"]
});
Wordpress2016.bodyFontFamily      = ["Lora", "Georgia", "serif"];
Wordpress2016.bodyColor           = "hsla(0,0%,0%,0.7)";
Wordpress2016.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    'li': {
      marginLeft: '60px',
    }
  }
}

// delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale  = typography.scale
