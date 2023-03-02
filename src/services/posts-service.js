import {db} from "../firebase-app"
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore"

const postsCollection = collection(db, 'posts')
export const addPost = (post) => {
  return addDoc(postsCollection, post)
}
export const updatePost = (id, updatedPost) => {
  const postDoc = doc(db, 'posts', id)
  return updateDoc(postDoc, updatedPost)
}

export const deletePost = (id) => {
  const postDoc = doc(db, 'posts', id)
  return deleteDoc(postDoc) 
}

const docsToPosts = (docs) => {
  const posts = docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return posts
}

export const getAllPosts = async () => {
  const data = await getDocs(postsCollection)
  const posts = docsToPosts(data.docs)
  return posts
}

export const getMyPosts = async (email) => {
  const q = query(postsCollection,
    where("author", "==", email));
  const data = await getDocs(q)
  const posts = docsToPosts(data.docs)
  return posts
}

export const getPost = (id) => {
  const postDoc = doc(db, 'posts', id)
  return getDoc(postDoc)
}

export const sayHello = () => {
    return('Hello from posts-service.js')
}
