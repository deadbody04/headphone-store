import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import {
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
} from '@material-ui/core'

export default function Checkout({ itemsPrice }) {
  const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')

  return (
    <div
      style={{
        width: '500px',
        height: '550px',
        position: 'relative',
        padding: 20,
      }}
    >
      <Elements stripe={stripePromise} style={{ width: '100%' }}>
        <Box style={{ width: '100%' }}>
          <Typography style={{ textAlign: 'center' }}>
            Enter your contact information
          </Typography>
          <Typography>
            <TextField label="Name" style={{ padding: 10, width: '100%' }} />
          </Typography>
          <Typography>
            <TextField label="Address" style={{ padding: 10, width: '100%' }} />
          </Typography>
          <Typography>
            <TextField label="Email" style={{ padding: 10, width: '100%' }} />
          </Typography>
          <Typography>
            <TextField label="Index" style={{ padding: 10, width: '100%' }} />
          </Typography>
          <Typography style={{ padding: 10, color: '#777777' }}>
            Order price: ${itemsPrice}
          </Typography>
          <Typography style={{ padding: 10, color: '#777777' }}>Shipment: Free</Typography>
          <Typography style={{ padding: 10, color: '#777777' }}>Total: ${itemsPrice}</Typography>
          <Typography style={{ padding: 10 }}>
            <CardElement />
          </Typography>
          <Button
            style={{
              marginTop: 25,
              paddingTop: 25,
              margin: 'auto',
              width: '100%',
              height: 40,
              padding: 0,
              borderRadius: 0,
              background: '#DCDFE6',
              boxShadow: 'none',
              color: '#000',
              textAlign: 'center',
              transition: 'all 0.0s ease',
              textTransform: 'none',
              '&:hover': {
                color: '#000',
                background: '#CAAF8B',
                transition: 'all 0.4s ease',
              },
            }}
          >
            PAY
          </Button>
        </Box>
      </Elements>
    </div>
  )
}
