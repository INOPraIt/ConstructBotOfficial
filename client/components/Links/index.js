import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <div className='containerLink'>
      <Link className='links' to={'/messages'}>
        Messages
      </Link>
    </div>
  )
}
