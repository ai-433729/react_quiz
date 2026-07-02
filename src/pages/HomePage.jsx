import { Link } from "react-router-dom"
import { ROUTES } from '../const.js'

export default function HomePage() {
  return (
    <>
      <h1>Reactに関するクイズ</h1>
      <p>これはReactの勉強のために作成したページです。</p>
      <p>復習もかねてReactに関するクイズを5問出題します。</p>
      <Link to={ROUTES.QUIZ} className="quiz-link">Start</Link>
    </>
  )
}