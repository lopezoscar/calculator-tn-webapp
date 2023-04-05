import {
  Box,
  Card,
  CardContent,
  Typography
} from '@mui/material'

export const CalculatorResult = ({ result }) => (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography
          gutterBottom
          variant='h4'
        >
          Result
        </Typography>
        <Typography
          color='text.secondary'
          variant='h5'
        >
          {result}
        </Typography>
      </Box>
    </CardContent>
  </Card>
)
