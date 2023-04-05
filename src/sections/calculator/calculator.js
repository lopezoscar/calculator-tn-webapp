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
  Alert,
  Unstable_Grid2 as Grid
} from '@mui/material'

const operations = [
  {
    value: 'addition',
    label: 'Addition'
  },
  {
    value: 'subtraction',
    label: 'Subtraction'
  },
  {
    value: 'multiplication',
    label: 'Multiplication'
  },
  {
    value: 'division',
    label: 'Division'
  },
  {
    value: 'square_root',
    label: 'Square Root'
  }
]

export const Calculator = ({ onRun, error }) => {
  const [values, setValues] = useState({
    firstParam: 5,
    secondParam: 5,
    operationType: 'addition'
  })

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onRun(values)
  }

  return (
    <form
      autoComplete='off'
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader='Choose an operation and run'
          title='Calculator'
        />
        <CardContent sx={{ pt: 0 }}>
          {error && <Alert severity='error'>{error.message}</Alert>}
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
                  label='Operand A'
                  name='firstParam'
                  onChange={handleChange}
                  required
                  value={values.firstParam}
                />
              </Grid>
              <Grid
                xs={12}
                md={4}
              >
                <TextField
                  fullWidth
                  label='Operation type'
                  name='operationType'
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.operationType}
                >
                  {operations.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              {values.operationType !== 'square_root' && <Grid
                xs={12}
                md={4}
                                                         >
                <TextField
                  fullWidth
                  label='Operand B'
                  name='secondParam'
                  onChange={handleChange}
                  required
                  value={values.secondParam}
                />
              </Grid>}
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
