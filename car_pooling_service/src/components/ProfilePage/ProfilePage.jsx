import { Box, Divider, Typography } from '@mui/material'

export default function ProfilePage() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '91.5vh',
          width: '100vw',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '100%',
            width: '30%',
          }}
        >
          <Box sx={{width: '90%', height: '90%', display: 'flex', flexDirection: 'column', gap:2, alignItems: 'center'}}>
            <img src="https://via.placeholder.com/200" alt="profile" style={{height: '35%', width: '55%'}} />
            <Divider
              textAlign="left"
              orientation="horizontal"
              variant="middle"
              sx={{ width: '60%', color: 'black',  borderColor: 'black', border: '3px', fontWeight: '500' }}
            >
              Recent Ride
            </Divider>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '70%',
            backgroundColor: 'green',
          }}
        >
          
        </Box>
      </Box>
    </>
  )
}
