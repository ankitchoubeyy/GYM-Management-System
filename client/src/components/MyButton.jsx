import React from 'react'
import { Link } from 'react-router-dom'

export const MyButton = ({title, route, width}) => {
  return (
          <Link to={`/${route}`} className={`px-4 sm:px-6 md:px-8 lg:px-10 py-2 bg-teal-500 cursor-pointer hover:bg-teal-600 transition duration-500 text-white rounded-full w-${width}`}>{title}</Link>
  )
}
