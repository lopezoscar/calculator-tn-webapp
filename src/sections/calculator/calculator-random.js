import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material'

export const CalculatorRandom = ({ onRun }) => {
  const [values, setValues] = useState({
    legnth: 5
  })

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onRun({ type: 'random', params: values })
  }

  return (
    <form
      autoComplete='off'
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader='Choose the length of your random string'
          title='Calculator Random'
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={4}
              >
                <TextField
                  fullWidth
                  label='length'
                  name='length'
                  onChange={handleChange}
                  required
                  value={values.length}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button type='submit' variant='contained'>
            Run
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}
