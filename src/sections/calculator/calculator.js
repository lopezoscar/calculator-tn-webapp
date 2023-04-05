import { useCallback, useState } from 'react'
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

export const Calculator = ({ onRun }) => {
  const [values, setValues] = useState({
    firstParam: 10,
    secondParam: 20,
    operationType: 'addition'
  })

  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }))
    },
    []
  )

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
    },
    []
  )

  return (
    <form
      autoComplete='off'
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader='Choose the operation and run'
          title='Calculator'
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
                  label='Operand A'
                  name='operandA'
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
              <Grid
                xs={12}
                md={4}
              >
                <TextField
                  fullWidth
                  label='Operand B'
                  name='operandB'
                  onChange={handleChange}
                  required
                  value={values.secondParam}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant='contained' onClick={() => onRun(values)}>
            Run
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}
