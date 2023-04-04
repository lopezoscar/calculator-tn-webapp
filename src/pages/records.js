import { useCallback, useMemo, useState } from 'react'
import Head from 'next/head'
import { subDays, subHours } from 'date-fns'
import PlusIcon from '@heroicons/react/24/solid/PlusIcon'
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material'
import { useSelection } from 'src/hooks/use-selection'
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout'
import { CustomersTable } from 'src/sections/customer/customers-table'
import { CustomersSearch } from 'src/sections/customer/customers-search'
import { applyPagination } from 'src/utils/apply-pagination'

const now = new Date()
// const data = []
const data =
  [
    {
      _id: '6429bf1ce59703a8aa9f6275',
      operation: 'multiplication',
      operationResponse: 200,
      firstParam: 10,
      secondParam: 20,
      userId: '642999749f57ee9aa15d6fe9',
      active: false,
      date: '2023-04-02T17:45:00.760Z'
    },
    {
      _id: '6429bf44833e14453f050171',
      operation: 'random_string',
      userId: '642999749f57ee9aa15d6fe9',
      operationResponse: '8Gp',
      active: false,
      date: '2023-04-02T17:45:40.845Z'
    },
    {
      _id: '6429c49a8fb1e6e1b6d05c51',
      operation: 'division',
      operationResponse: Infinity,
      firstParam: 10,
      secondParam: 0,
      userId: '642999749f57ee9aa15d6fe9',
      active: true,
      date: '2023-04-02T18:08:26.775Z'
    },
    {
      _id: '6429c4cada760e9618f89c35',
      operation: 'division',
      operationResponse: Infinity,
      firstParam: 10,
      secondParam: 0,
      userId: '642999749f57ee9aa15d6fe9',
      active: true,
      date: '2023-04-02T18:09:14.976Z'
    },
    {
      _id: '6429c551206b5bb4a2c5068c',
      operation: 'division',
      operationResponse: { code: 'VALIDATION_ERROR' },
      firstParam: 10,
      secondParam: 0,
      userId: '642999749f57ee9aa15d6fe9',
      active: true,
      date: '2023-04-02T18:11:29.842Z'
    },
    {
      _id: '642a081d72791b18d352b985',
      operation: 'division',
      operationResponse: 10,
      firstParam: 10,
      secondParam: 1,
      userId: '642999749f57ee9aa15d6fe9',
      active: false,
      date: '2023-04-02T22:56:29.155Z'
    },
    {
      _id: '642a08247bdfd9546913f9ee',
      operation: 'random_string',
      userId: '642999749f57ee9aa15d6fe9',
      operationResponse: '*0J',
      active: true,
      date: '2023-04-02T22:56:36.502Z'
    }
  ]

const useCustomers = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage)
    },
    [page, rowsPerPage]
  )
}

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id)
    },
    [customers]
  )
}

const Page = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const customers = useCustomers(page, rowsPerPage)
  const customersIds = useCustomerIds(customers)
  const customersSelection = useSelection(customersIds)

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value)
    },
    []
  )

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value)
    },
    []
  )

  return (
    <>
      <Head>
        <title>
          Customers
        </title>
      </Head>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth='xl'>
          <Stack spacing={3}>
            <Stack
              direction='row'
              justifyContent='space-between'
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant='h4'>
                  Records
                </Typography>
              </Stack>
            </Stack>
            <CustomersSearch />
            <CustomersTable
              count={data.length}
              items={customers}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  )
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
)

export default Page
