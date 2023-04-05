import Head from 'next/head'
import { useState } from 'react'
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid, Alert } from '@mui/material'
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout'
import { Calculator } from 'src/sections/calculator/calculator'
import { calculateBasic, calculateRandom } from 'src/services/calculator-service'
import { CalculatorResult } from 'src/sections/calculator/calculator-result'
import { CalculatorRandom } from 'src/sections/calculator/calculator-random'
import { useAuth } from 'src/hooks/use-auth'

const TOO_MANY_REQUESTS_HTTP_STATUS = 429
const BAD_REQUEST_HTTP_STATUS = 400
const UNAUTHORIZED_HTTP_STATUS = 401

const CalculatorHome = () => {
  const [result, setResult] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  const { user } = useAuth()

  function getCalculationFn (type) {
    return type === 'basic' ? calculateBasic : calculateRandom
  }

  const handleRunCalculation = async ({ type, params }) => {
    setLoading(true)
    console.log('params', params)
    try {
      const response = await getCalculationFn(type)(params)
      console.log('response', response)
      setResult(response?.data.operationResponse)
      setLoading(false)
    } catch (err) {
      console.log('err', err)
      setLoading(false)
      if (err.response.status === TOO_MANY_REQUESTS_HTTP_STATUS) {
        setError({ message: 'Not enough balance' })
        return
      }
      if (err.response.status === BAD_REQUEST_HTTP_STATUS) {
        setError({ message: 'Please check your input, only numbers are valid' })
        return
      }
      if (err.response.status === UNAUTHORIZED_HTTP_STATUS) {
        setError({ message: 'Session expired' })
        return
      }
      setError({ message: 'Oops! There was an error on this calculation. Please try again or check logs' })
    }
  }

  return (
    <>
      <Head>
        <title>
          Calculator
        </title>
      </Head>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth='lg'>
          <Stack spacing={3}>
            <div>
              <Typography variant='h4'>
                Hi {user.username}!
              </Typography>
              {error && <Alert severity='error'>{error.message}</Alert>}
            </div>
            <div>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  xs={12}
                  md={6}
                  lg={6}
                >
                  <Calculator onRun={handleRunCalculation} />
                </Grid>
                <Grid
                  xs={12}
                  md={6}
                  lg={6}
                >
                  <CalculatorResult result={result} loading={loading} />
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  xs={12}
                  md={6}
                  lg={6}
                >
                  <CalculatorRandom onRun={handleRunCalculation} />
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

CalculatorHome.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
)

export default CalculatorHome
