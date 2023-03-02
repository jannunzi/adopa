import React, {useEffect, useRef, useState} from 'react';
import {useAuth} from "../contexts/auth-context";
import {addPost, deletePost, getAllPosts, getMyPosts, sayHello} from "../services/posts-service"

const PostsList = () => {
  const postRef = useRef()
  const {currentUser} = useAuth()
  // const [newPost, setNewPost] = useState({post: 'New post'})
  const [posts, setPosts] = useState([])
  const handlePost = async () => {
    let newPost = {
      post: postRef.current.value,
      author: currentUser.email
    }
    console.log(newPost)
    const addedPostRef = await addPost(newPost)
    newPost.id = addedPostRef.id
    setPosts([...posts, newPost])
  }
  const getAllPostsNow = async () => {
    const posts = await getAllPosts()
    setPosts(posts)
  }
  const getMyPostsNow = async () => {
    const posts = await getMyPosts(currentUser.email)
    setPosts(posts)
  }
  useEffect(() => {
    getMyPostsNow()
  }, [])
  const handleDeletePost = async (post) => {
    await deletePost(post.id)
    // console.log(post)
    setPosts(
      posts.filter(t => post.id !== t.id)
    )
  }
  return (
    <div>
      <button onClick={handlePost}
              className="float-end btn btn-primary rounded-pill">
        Post
      </button>
      <textarea
        className="form-control mb-1 w-75"
        ref={postRef}></textarea>
      <ul className="mt-2 list-group">
        {
          posts.map(post =>
          <li key={post.id} className="list-group-item">
            <span onClick={() => handleDeletePost(post)} className="float-end fs-2">&times;</span>
            <div>
              @{post.author.split("@")[0]}
            </div>
            <div>
              {post.post}
            </div>
          </li>)
        }
      </ul>
    </div>
  )
}

export default PostsList;