export const COLORS = {
  primary: '#001F2D',
  secondary: '#4D626C',
  activeClr: 'rgb(240,180,85)',
  blue: '#07889b',
  bgClr: '#373737',
  ctaClr: '#e37222',
  bgLightClr: '#f4f4f4',
  white: '#d3e7e6',
  gray: '#74858C',
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 20,
  extraLarge: 28,
};

export const FONTS = {
  bold: 'Whisper',
  semiBold: 'Whisper',
  especial: 'Whisper',
  regular: 'Body',
  light: 'Body',
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
