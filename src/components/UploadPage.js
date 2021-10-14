import { Button, Grid, Paper, Box, styled } from "@material-ui/core";

const Input = styled('input')({
  display: 'none',
});

export default function UploadPage({ setError, setFiles }) {
  
  const handleUpload = (e) => {
    if (!e.target.files) return
    if (e.target.files.length < 2 || e.target.files.length > 5) {
      setError(true)
      setFiles([])
    }
    let files = e.target.files
    setFiles([...files])
  }
  return (
    <>
      <Paper elevation={3}>
        <Box width={800} height={300} mt={20}>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
          >
            <Box mt={8}>
              
            <Paper elevation={8} >
              <label htmlFor="contained-button-file">
                <Input
                  multiple
                  onChange={handleUpload}
                  accept='image/jpeg,image/png,application/pdf'
                  id="contained-button-file"
                  type="file"
                  
                />
                <Button variant="contained" component="span" >
                  Upload files
                </Button>
              </label>
            </Paper>
            </Box>
          </Grid>
        </Box>
      </Paper >
    </>
  )
}
