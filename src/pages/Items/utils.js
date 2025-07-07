import { screenSizeNumber } from '@/styles/media';

export const getItemLimitByscreenSize = ({ mobile, tablet, desktop }) => {
  const width = window.innerWidth;
  if (width > screenSizeNumber.DESKTOP) return desktop;
  if (width > screenSizeNumber.TABLET) return tablet;
  return mobile;
};
