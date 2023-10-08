import React from 'react'
import UserTable from './UserTable'

interface Props{
    searchParams:{orderBy:string}
}
const PostsPage  = async({searchParams:{orderBy}}:Props) => {
   
    return (
        <div>PostsPage {orderBy}
            <UserTable orderBy={orderBy} ></UserTable>
        </div>
  )
}

export default PostsPage 