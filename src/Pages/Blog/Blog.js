import React from 'react'
import useTitle from '../../hooks/useTitle';
import './Blog.css'

const Blog = () => {
  useTitle('Blog');
  return (
    <div>
      <h1 className='text-center text-3xl mt-24'>
        Welcome to Blog Page!!!
      </h1>
      <h3 className='text-center text-xl mt-5 mb-72'>
        This is Blog Page that is under development... will soon
        be updated
      </h3>
    </div>
  )
}

export default Blog