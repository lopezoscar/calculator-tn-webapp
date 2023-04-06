import { useCallback, useMemo, useState } from 'react'
import Head from 'next/head'
import { Box, Container, Stack, Typography } from '@mui/material'
import { useSelection } from 'src/hooks/use-selection'
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout'
import { RecordsTable } from 'src/sections/records/records-table'
import { RecordsSearch } from 'src/sections/records/records-search'

import useRecords from 'src/hooks/use-records'
import { deleteRecord } from 'src/services/records-service'

const useRecordsIds = (records) => {
  return useMemo(
    () => {
      return records.map((record) => record._id)
    },
    [records]
  )
}

const Page = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [sort, setSort] = useState()
  const [search, setSearch] = useState()

  const [onDeleteRecord, setOnDeleteRecord] = useState(null)

  const { data: records, loading, error: errorRecords } = useRecords({ page, limit: rowsPerPage, sort, search, onDeleteRecord })
  const recordIds = useRecordsIds(records)
  const recordsSelection = useSelection(recordIds)

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

  const handleOnDeleteRecord = async ({ recordId }) => {
    console.log('deleting record', recordId)
    try {
      await deleteRecord({ recordId })
      setOnDeleteRecord(recordId)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSortChange = (newOrderBy) => {
    console.log('sort', newOrderBy)
    setSort(newOrderBy)
  }

  const handleSearch = (search) => {
    setSearch(search)
  }

  return (
    <>
      <Head>
        <title>
          Records
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
            <RecordsSearch onSearch={handleSearch} />
            <RecordsTable
              count={-1}
              items={records}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onDeleteRecord={handleOnDeleteRecord}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={recordsSelection.selected}
              order='desc'
              orderBy='date'
              onSortChange={handleSortChange}
              loading={loading}
              error={errorRecords}
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
