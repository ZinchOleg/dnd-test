import { Paper, Box, Typography, Grid } from '@material-ui/core'
import { Document, Page, pdfjs } from 'react-pdf'
import { useDrag, useDrop } from 'react-dnd'
import { ItemType } from './UploadedPage'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default function FileItem({ file, id, findFile, moveFile}) {

    function createFileSrc(file) {
        return URL.createObjectURL(file)
    }

    const ownIndex = findFile(id).index

    const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemType.FILE,
      item: { id, ownIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, ownIndex } = item

        const didDrop = monitor.didDrop()
        if (!didDrop) {
          moveFile(droppedId, ownIndex)
        }
      },
    }),
    [id, ownIndex, moveFile]
    )
    
    const [, drop] = useDrop(
    () => ({
      accept: ItemType.FILE,
      canDrop: () => false,
      hover({ id: dragId }) {
        if (dragId !== id) {
          const { index } = findFile(id)
          moveFile(dragId, index)
        }
      },
    }),
    [findFile, moveFile]
    )
    
    const opacity = isDragging ? 0.3 : 1

    return (
        <Paper
      ref={(item) => drag(drop(item))}
      style={{ opacity }}
      draggable='true'
      elevation={3}
    >
    <Box height={130} width={120} p={1} overflow='hidden'>
        <Grid
            container
            direction='column'
            justifyContent='space-between'
            alignItems='center'
        >
            <Box height={90}  overflow="hidden">
                
                    {file.type === 'application/pdf'
                        ? 
                        <Document file={createFileSrc(file)}>
                            <Page height={120} width={105}  pageNumber={1} />
                        </Document>
                        : <img src={createFileSrc(file)} width={90} alt={file.name} />
                    }
            </Box>
                    <Typography
                      style={{ overflow: 'hidden', textOverflow: 'ellipsis', width: 90}}
                      noWrap
                    >
                        {file.name}
                    </Typography>
        </Grid>
    </Box>
    </Paper>
    )
}
