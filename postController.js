const post = [
  {id:1, title:'Post One'},
  {id:2, title:'Post Two'}
]
// exporting method =1
// export const getPosts = () => post;
// exporting methode =2
const getPosts = () => post;
// export {
//   getPosts
// }
// can be exported as default
export default getPosts;
// exporting methode =3
export const getPostLength = () => post.length;
