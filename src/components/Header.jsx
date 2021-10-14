import React from 'react'
import Theme from './Theme'
import { AppBar, Container, Grid, Toolbar, Typography } from '@material-ui/core'

export default function Header({darkState,handleThemeChange}) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            justifyContent="space-around"
              alignItems="center"
          >
            <Typography variant='h5'>DND_Test</Typography>
            <Theme darkState={darkState} handleThemeChange={handleThemeChange}/>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
    )
}