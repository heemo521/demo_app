import React, {FunctionComponent} from 'react'
import {Link} from 'react-router-dom'

export interface IBackButtonProps {
  backURL: string
}

const BackButton: FunctionComponent<IBackButtonProps> = ({backURL}) => {
  return (
    <Link to={backURL}>
      <img
        className='Explore-back'
        src='https://posh-b2.s3.us-east-2.amazonaws.com/left-arrow-in-circular-button-black-symbol.svg'
        alt='Back'
      />
    </Link>
  )
}

export default BackButton
