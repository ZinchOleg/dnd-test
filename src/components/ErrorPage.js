import { Button, Grid, IconButton, Paper, Typography, Box } from '@material-ui/core'
import {Close} from "@material-ui/icons"

export default function ErrorPage({handleCloseError, text}) {
    return <>
        <Paper elevation={6}>
            <Box width={500} height={220} p={3} position='relative'>
                <Grid container direction='column' justifyContent='space-around' alignItems='center'>
                    <Typography mt={3} variant='h4'>Error</Typography>
                    <Typography mt={3} gutterBottom color='gray' variant='p'>{text}</Typography>
                    <Box mt={5} width={180}>
                        <Button fullWidth  onClick={handleCloseError} variant="contained">OK</Button>
                    </Box>
                </Grid>
                <IconButton
                    onClick={handleCloseError}
                    style={{ position: 'absolute', top: 10, right: 10, zIndex:10 }}
                >
                        <Close/>
                </IconButton>
            </Box>
        </Paper>
    </>
}
