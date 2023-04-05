import CalculatorIcon from '@heroicons/react/24/solid/CalculatorIcon'
import TableCellsIcon from '@heroicons/react/24/solid/TableCellsIcon'
import ArrowLeftOnRectangleIcon from '@heroicons/react/24/solid/ArrowLeftOnRectangleIcon'
import { SvgIcon } from '@mui/material'

export const items = [
  {
    title: 'Calculator',
    path: '/',
    icon: (
      <SvgIcon fontSize='small'>
        <CalculatorIcon />
      </SvgIcon>
    )
  },
  {
    title: 'My records',
    path: '/records',
    icon: (
      <SvgIcon fontSize='small'>
        <TableCellsIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: (
      <SvgIcon fontSize='small'>
        <ArrowLeftOnRectangleIcon />
      </SvgIcon>
    )
  }
]
