import { Box, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {

  const [li1, setLi1] = useState('');
  const [li2, setLi2] = useState('');

  return (
    <nav className='nav'>
        <p className='site-title'>Hostel Manager</p>
        <ul>
            <li className={li1} onClick={() =>{ setLi1('active'); setLi2('')}}>
              <Link to={'/studentList'}>
                <p>Student List</p>
              </Link>
            </li>
            <li className={li2} onClick={() =>{ setLi2('active'); setLi1('')}}>
              <Link to={'/register'}>
                <p>Register Student</p>
              </Link>
            </li>
        </ul>
    </nav>
  )
}
