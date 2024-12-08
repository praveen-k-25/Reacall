import React from 'react'
import { useParams } from 'react-router-dom'

const PostPage = ({posts}) => {
    const {id} = useParams()
    const post = posts.find(post => (post.id).toString() == id)
  return (
    <article className="post" >
        <h2>{post.title}</h2>
        <p className="postDate">{post.datetime}</p>
        <p className="postbody">{
          (post.body).length <= 25 ? post.body : `${(post.body).slice(0,25)}...`
        }</p>
    </article>
  )
}

export default PostPage