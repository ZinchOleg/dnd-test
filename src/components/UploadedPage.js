import { useState } from 'react'
import { Grid, Paper, Box, Button } from '@material-ui/core'
import { useDrop } from 'react-dnd'
import update from 'immutability-helper'
import FileItem from './FileItem'


export const ItemType = {
  FILE: "file"
}

export default function UploadedPage({files, handleCleanDashboard}) {

    const [, drop] = useDrop(() => ({ accept: ItemType.FILE }))

    const filesWithId = files.map((file, i) => {
        return { id: i + 1, file: file }
    })

    const [filesList, setFilesList] = useState(filesWithId)

    const findFile = (id) => {
      const file = filesList.find((file) => file.id === id)
      return {
        file,
        index: filesList.indexOf(file)
      }
    }
    
    const moveFile = (id, onIndex) => {
      const { file, index } = findFile(id)
      setFilesList(update(filesList, {$splice: [[index, 1],[onIndex, 0, file]]}))
    }
    
    return (
        <Paper elevation={3}>
            <Box width={800} height={300} mt={20} position="relative">
                <Grid
                    width='100%'
                    height='100%'
                    container
                    justifyContent='space-evenly'
                    alignItems='center'
                    ref={drop}
                >
                    {filesList.map((fileItem, i) => {
                        return <FileItem
                                file={fileItem.file}
                                key={i}
                                id={fileItem.id}
                                findFile={findFile}
                                moveFile={moveFile}
                            />
                        })
                    }
                </Grid>
                {(2 <= files.length && files.length <= 5) && <Button style={{position: 'absolute', bottom: 20, left: "40%"}} onClick={handleCleanDashboard}>Clean dashboard</Button>}
            </Box>
        </Paper>
    )
}
