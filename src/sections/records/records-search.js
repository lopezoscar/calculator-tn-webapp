import { useEffect, useState } from 'react'
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'
import { Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material'

export const RecordsSearch = ({ onSearch }) => {
  const [search, setSearch] = useState()

  useEffect(() => {
    onSearch(search)
  }, [search])

  return (
    <Card sx={{ p: 2 }}>
      <OutlinedInput
        defaultValue=''
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        fullWidth
        placeholder='Search record. Type mult or rand for example'
        startAdornment={(
          <InputAdornment position='start'>
            <SvgIcon
              color='action'
              fontSize='small'
            >
              <MagnifyingGlassIcon />
            </SvgIcon>
          </InputAdornment>
        )}
        sx={{ maxWidth: 500 }}
      />
    </Card>
  )
}
