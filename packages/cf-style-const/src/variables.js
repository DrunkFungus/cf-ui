import { lighten, darken } from 'polished';

const colorOffsetLight = 0.15;
const colorOffsetDark = 0.07;

export default {
  gradient: {
    primary: 'linear-gradient(left, #76C4E2, #85CBA8)',
    two: 'linear-gradient(left, #8176B5, #85CBA8)',
    three: 'linear-gradient(left, #8176B5, #76C4E2)',
    four: 'linear-gradient(left, #8176B5, #BA77B1)',
    five: 'linear-gradient(left, #8176B5, #F16975)',
    six: 'linear-gradient(left, #F16975, #F69259)',
    seven: 'linear-gradient(left, #F69259, #FFDB6F)',
    eight: 'linear-gradient(left, #85CBA8, #FFDB6F)'
  },
  color: {
    //Style guide colors
    rain: '#408BC9',
    sky: '#76C4E2',
    dew: '#85CBA8',
    twilight: '#8176B5',
    sunset: '#BA77B1',
    dawn: '#F16975',
    sunrise: '#F69259',
    lightning: '#FFDB6F',
    night: '#404041',
    dusk: '#4D4D4F',
    storm: '#808285',
    hail: '#BCBEC0',
    moonshine: '#F7F7F7',
    //current colors
    cement: '#7D7D7D',
    grass: '#9BCA3E',
    marine: '#2F7BBF',
    tangerine: '#FF7900',
    apple: '#BD2527'
  },
  fontSize: '15px',
  boxShadow: '0 0 20px 0 rgba(136,136,136,0.50)',
  inputFontSize: '13px',
  lineHeight: 1.5,
  inputLineHeight: 1.4,
  em: '1em',
  rem: '1rem',
  fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
  weightLight: 300,
  weightNormal: 400,
  weightSemiBold: 600,
  weightBold: 700,
  fontWeight: 400,
  fontColorHeadingCaption: '#888',
  borderRadius: '2px',
  arrowSize: '5px',
  disabledBackground: '#ededed',
  bodyBackground: '#ebebeb',
  bodyAccentColor: darken(0.8, '#fff'),
  bodyOffsetColor: darken(0.53, '#fff'),
  fontColor: darken(0.8, '#fff'),
  colorWhite: '#fff',
  colorBlack: '#000',
  colorOffsetLight,
  colorOffsetDark,
  colorInfo: '#00a9eb',
  colorSuccess: '#68970f',
  colorWarning: '#fca520',
  colorError: '#ff3100',
  colorMuted: darken(0.5125, '#fff'),
  colorSmoke: '#f2f2f2',
  colorBlue: '#2f7bbf',
  colorBlueLight: lighten(colorOffsetLight, '#2f7bbf'),
  colorBlueDark: darken(colorOffsetDark, '#2f7bbf'),
  colorOrange: '#ff7900',
  colorOrangeLight: lighten(colorOffsetLight, '#ff7900'),
  colorOrangeDark: darken(colorOffsetDark, '#ff7900'),
  colorGray: darken(0.5125, '#fff'),
  colorGrayLight: darken(0.13, '#fff'),
  colorGrayLightOnboarding: '#F7F7F7',
  colorGrayDark: darken(0.8, '#fff'),
  colorGrayBorder: '#666',
  colorGreen: '#9bca3e',
  colorGreenLight: lighten(colorOffsetLight, '#9bca3e'),
  colorGreenDark: darken(colorOffsetDark, '#9bca3e'),
  colorRed: '#bd2527',
  colorRedLight: lighten(colorOffsetLight, '#bd2527'),
  colorRedDark: darken(colorOffsetDark, '#bd2527'),
  colorYellow: '#ffd24d',
  colorYellowLight: lighten(colorOffsetLight, '#ffd24d'),
  colorYellowDark: darken(colorOffsetDark, '#ffd24d'),
  colorPink: '#d91698',
  colorPinkLight: lighten(colorOffsetLight, '#d91698'),
  colorPinkDark: darken(colorOffsetDark, '#d91698'),
  colorPurple: '#9545e5',
  colorPurpleLight: lighten(colorOffsetLight, '#d91698'),
  colorPurpleDark: darken(colorOffsetDark, '#d91698'),
  colorTwitterBlue: '#00aced',
  colorFacebookBlue: '#3b5998',
  colorMainBackground: '#e6e6e6'
};
