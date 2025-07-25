import React from 'react'
import { twMerge } from 'tailwind-merge'

const PriceFormat = ({amount , className}) => {
    const formattedPrice = new Number(amount).toLocaleString( "en-US" , {
        style : "currency",
        currency : "USD",
        minimumFractionDigits : 2
    })
  return (
    <div>
        <span className={ twMerge( 'font-semibold' , className)}>{formattedPrice}</span>
    </div>
  )
}

export default PriceFormat