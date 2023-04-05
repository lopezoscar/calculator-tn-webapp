import Head from 'next/head'
import { useState } from 'react'
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material'
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout'
import { Calculator } from 'src/sections/calculator/calculator'
import { calculateBasic } from 'src/services/calculator-service'
import { CalculatorResult } from 'src/sections/calculator/calculator-result'

const CalculatorHome = () => {
  const [result, setResult] = useState()

  const handleRunCalculation = async (params) => {
    console.log('params', params)
    const response = await calculateBasic(params)
    console.log('response', response)
    setResult(response?.data.operationResponse)
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
                Calculator
              </Typography>
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
                  <CalculatorResult result={result} />
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
