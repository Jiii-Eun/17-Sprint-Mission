import { screenSizeNumber } from '@/styles/media';

export const getItemDisplayLimitByscreenSize = ({
  mobile,
  tablet,
  desktop,
}) => {
  const width = window.innerWidth;
  if (width > screenSizeNumber.desktop) return desktop;
  if (width > screenSizeNumber.tablet) return tablet;
  return mobile;
};
