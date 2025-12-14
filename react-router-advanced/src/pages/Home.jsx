import { Link } from "react-router-dom"

function Home() {
  return (
    <>
    <h1>Home</h1>
    <Link to="/profile">Profile</Link><br />
    <Link to="/posts/1">Post 1</Link>
    </>
  )
}

export default Home