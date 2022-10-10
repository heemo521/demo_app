import React from 'react'

export default function ExploreCover({}) {
  return (
    <div className='Explore-cover'>
      <video autoPlay loop muted className='Explore-cover-video'>
        <source src='https://posh-b2.s3.us-east-2.amazonaws.com/meta+(1)_1.mp4' type='video/mp4' />
      </video>
    </div>
  )
}
