import React from 'react'

const DetailPage = ({params}) => {
  return (
    <div>
      <h1>halaman detail product</h1>
      <h4>product dengan ip = {params.idProduct}</h4>
    </div>
  )
}

export default DetailPage