const hostApi = 'https://335737b6-288e-48b0-9215-1de0cf3840d9.mock.pstmn.io'
const baseURLApi = `${ hostApi }/api`

export default {
  light: {
    dark: false,
    variables: {}, // ✅ this property is required to avoid Vuetify crash
    colors: {
      primary: '#536dfe',
      primaryConst: '#536dfe',
      secondary: '#FF5C93',
      secondaryConst: '#FF5C93',
      error: '#FF4081',
      warning: '#FFC260',
      success: '#3CD4A0',
      successConst: '#3CD4A0',
      info: '#9013FE',
      greyBold: '#4a4a4a',
      greyBoldConst: '#4a4a4a',
      greyMedium: '#6e6e6e',
      greyTint: '#b9b9b9',
      default: '#e0e0e0',
      iconColor: '#FFFFFF',
    },
  },
  dark: {
    dark: true,
    variables: {}, // ✅ this property is required to avoid Vuetify crash
    colors: {
      primary: '#536dfe',
      primaryConst: '#536dfe',
      secondary: '#FF5C93',
      secondaryConst: '#FF5C93',
      success: '#3CD4A0',
      successConst: '#3CD4A0',
      error: '#FF4081',
      greyMedium: '#bfbfbf',
      greyBold: '#d6d6d6',
      greyBoldConst: '#4a4a4a',
      greyTint: '#9b9b9b',
      default: '#e0e0e0',
    },
  },
  hostApi,
  baseURLApi,
}
