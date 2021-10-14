import React from 'react';
import { Box, Button, ButtonGroup } from '@material-ui/core';

export default function Theme({darkState,handleThemeChange}) {
  return (
    <Box p={1}>
      <ButtonGroup
        fullWidth
        variant="text"
        aria-label="text primary button group"
      >
        <Button
          variant={darkState ? 'text' : 'contained'}
          onClick={() => {
            if (darkState)  handleThemeChange()
          }}
        >
          Light
        </Button>

        <Button
          onClick={() => {
            if (!darkState)  handleThemeChange()
          }}
          variant={darkState ? 'contained' : 'text'}
        >
          Dark
        </Button>
      </ButtonGroup>
    </Box>
  );
}