import { createTheme, MantineThemeOverride } from '@mantine/core';
import * as colors from '../colors';
import activeClassName from '../styles/active.module.css';

export const theme: MantineThemeOverride = createTheme({
  activeClassName: activeClassName.active,

  defaultRadius: 'md',

  colors,

  primaryColor: 'blue',
});
