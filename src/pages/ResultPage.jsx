import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../const.js'
import Result from '../components/Result/Result.jsx';
import Loading from '../components/Loading/Loading.jsx';
import { useEffect, useState } from 'react';

export default function ResultPage() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen
  const correctNumLen = location.state.correctNumLen

  useEffect(() => {
    setTimeout(() => setActive(true), 2000);
  }, [])
  return (
    <>
      <Loading active={active} />
      <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
      <br />
      <Link to={ROUTES.QUIZ} className='back-link
      '>もう一度チャレンジ</Link>
    </>

  )
}
