import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import { Decorator } from '@storybook/react';
import CssBaseline from "@mui/material/CssBaseline";
import theme from '../src/theme';

const withMuiTheme: Decorator = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

const preview: Preview = {
  decorators: [withMuiTheme],
};

export default preview;
