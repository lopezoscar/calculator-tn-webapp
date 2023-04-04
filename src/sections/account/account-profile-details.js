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

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  },
  {
    value: 'los-angeles',
    label: 'Los Angeles'
  }
]

export const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    firstName: 'Anika',
    lastName: 'Visser',
    email: 'demo@devias.io',
    phone: '',
    state: 'los-angeles',
    country: 'USA'
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
                md={6}
              >
                <TextField
                  fullWidth
                  label='Operand A'
                  name='firstName'
                  onChange={handleChange}
                  required
                  value={values.firstName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label='Operand B'
                  name='lastName'
                  onChange={handleChange}
                  required
                  value={values.lastName}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant='contained'>
            Run
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}
