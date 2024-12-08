import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Post = ({post}) => {
  /* to ready id number which is come through the path */
  /* const {id} = useParams(); */
  return (
    <article className="post" >
      <Link to={`/post/${post.id}`}>
          <h2>{post.title}</h2>
          <p className="postDate">{post.datetime}</p>
          <p className="postbody">{
            (post.body).length <= 25 ? post.body : `${(post.body).slice(0,25)}...`
          }</p>
      </Link>
    </article>
  ) 
}

export default Post