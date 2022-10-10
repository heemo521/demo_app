import React, {FunctionComponent} from 'react'

// const ExploreCover: FunctionComponent = () => {
//   return (
//     <div className='Explore-cover'>
//       <video autoPlay loop muted className='Explore-cover-video'>
//         <source src='https://posh-b2.s3.us-east-2.amazonaws.com/meta+(1)_1.mp4' type='video/mp4' />
//       </video>
//     </div>
//   )
// }

const ExploreVideos: FunctionComponent = () => {
  // Can I render use the same video twice ?
  return (
    <>
      <video autoPlay loop muted className='Explore-video'>
        <source src='https://posh-b2.s3.us-east-2.amazonaws.com/meta+(1)_1.mp4' type='video/mp4' />
      </video>
      <div className='Explore-cover'>
        <video autoPlay loop muted className='Explore-cover-video'>
          <source src='https://posh-b2.s3.us-east-2.amazonaws.com/meta+(1)_1.mp4' type='video/mp4' />
        </video>
      </div>
    </>
  )
}

export default ExploreVideos
