import PropTypes from 'prop-types'
import { format } from 'date-fns'
import TrashIcon from '@heroicons/react/24/solid/TrashIcon'
import {
  IconButton,
  SvgIcon,
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material'
import { Scrollbar } from 'src/components/scrollbar'
import { getInitials } from 'src/utils/get-initials'

export const CustomersTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props

  return (
    <Card>
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
                  Date
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
                      <IconButton>
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
      />
    </Card>
  )
}

CustomersTable.propTypes = {
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
  selected: PropTypes.array
}
