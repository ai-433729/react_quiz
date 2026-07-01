import { useEffect, useState } from 'react';
import Button from '../components/Button/Button.jsx';
import Display from '../components/Display/Display.jsx'
import { ROUTES } from '../const.js'
import quizData from '../data/quiz.js'
import { useNavigate } from 'react-router-dom';

export default function QuizPage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);
  const navigation = useNavigate();
  const MAX_QUIZ_LEN = quizData.length

  const handleClick = (clickedIndex) => {
    if (clickedIndex === quizData[quizIndex].answerIndex) {
      setAnswerLogs(prev => [...prev, true])
    } else {
      setAnswerLogs(prev => [...prev, false])
    }
    setQuizIndex(prev => prev + 1);
  };
  //引数clickedIndexは押された選択肢のIndex値を受け取る(buttonの0~3が入る)
  //if文でclickedIndexとanswerIndexを比較して一致していたらtrue違ったらfalse
  //setAnswerLogsで回答を保存する
  //正誤に関わらず終了したら問題番号のIndex値(setQuizIndex)を１つ進める

  useEffect(() => {
    if (answerLogs.length === MAX_QUIZ_LEN) {
      const correctNum = answerLogs.filter(answer => answer === true)
      navigation(ROUTES.RESULT, {
        state: {
          maxQuizLen: MAX_QUIZ_LEN,
          correctNumLen: correctNum.length
        }
      });
    }
  }, [answerLogs, MAX_QUIZ_LEN, navigation]);

  return (
    <>
      <div className="quiz-container">
        {quizData[quizIndex] && <Display>{`Q${quizIndex + 1}. ${quizData[quizIndex].question}`}</Display>}
        {quizData[quizIndex] && quizData[quizIndex].options.map((option, index) =>
        <Button key={`option-${index}`} onClick={() => handleClick(index)}>{option}</Button>)}
      </div>
    </>
  );
}
