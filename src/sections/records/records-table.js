import PropTypes from 'prop-types'
import TrashIcon from '@heroicons/react/24/solid/TrashIcon'
import { useState } from 'react'

import {
  IconButton,
  SvgIcon,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Alert,
  Typography
} from '@mui/material'
import { visuallyHidden } from '@mui/utils'

import { Scrollbar } from 'src/components/scrollbar'

export const RecordsTable = (props) => {
  const {
    count = -1,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    onDeleteRecord = () => {},
    selected = [],
    orderBy = 'date',
    onSortChange = () => {},
    loading = false,
    error
  } = props

  const [order, setOrder] = useState('asc')

  const createSortHandler = (newOrderBy) => (event) => {
    const newOrder = order === 'asc' ? 'desc' : 'asc'
    onSortChange(`${newOrder}_${newOrderBy}`)
    setOrder(newOrder)
  }

  return (
    <Card>
      {error && <Alert severity='error'>{error.message}</Alert>}
      {loading && <Typography>Loading records...</Typography>}
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  ID
                </TableCell>
                <TableCell>
                  Operation Type
                </TableCell>
                <TableCell>
                  Operation Response
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'date'}
                    direction={order}
                    onClick={createSortHandler('date')}
                  >
                    Date
                    <Box component='span' sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((record) => {
                const isSelected = selected.includes(record._id)
                return (
                  <TableRow
                    hover
                    key={record._id}
                    selected={isSelected}
                  >
                    <TableCell>
                      {record._id}
                    </TableCell>
                    <TableCell>
                      {record.operation}
                    </TableCell>
                    <TableCell>
                      {'' + record.operationResponse}
                    </TableCell>
                    <TableCell>
                      {record.date}
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => onDeleteRecord({ recordId: record._id })}>
                        <SvgIcon fontSize='small'>
                          <TrashIcon />
                        </SvgIcon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component='div'
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        SelectProps={{
          disabled: items.length === 0
        }}
        nextIconButtonProps={
           {
             disabled: items.length === 0
           }
        }
      />
    </Card>
  )
}

RecordsTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array,
  orderBy: PropTypes.string,
  onSortChange: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.shape({ message: PropTypes.string })
}
