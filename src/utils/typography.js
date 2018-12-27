import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
// import altonTypography from 'typography-theme-alton' funston
import altonTypography from 'typography-theme-alton'
altonTypography.plugins = [
  new CodePlugin(),
]
altonTypography.baseFontSize = '16px'
altonTypography.overrideThemeStyles = ({ rhythm }, options) => ({
  'span, h1 , h2, h3, h4, h5, h6, p': {
    color: '#999'
  },
  "ul, ol": {
    margin: '0'
  }
  // 'h2,h3': {
  //   marginBottom: rhythm(1/2),
  //   marginTop: rhythm(2)
  // }
})
const typography = new Typography(altonTypography)
export default typography

