import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress
} from '@mui/material'

export const CalculatorResult = ({ result, loading }) => (
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
          {loading ? <CircularProgress /> : result}
        </Typography>
      </Box>
    </CardContent>
  </Card>
)
