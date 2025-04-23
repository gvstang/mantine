import { MantineProvider } from '@mantine/core';
import { render as testingLibraryRender } from '@testing-library/react';
import { theme } from '../src';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: React.PropsWithChildren) => (
      <MantineProvider theme={theme}>{children}</MantineProvider>
    ),
  });
}
