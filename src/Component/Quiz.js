import QuizQuestion from "./QuizQuestio";
import React, { useState, useEffect } from "react";

function Quiz() {
  let setData = [
    {
      question: "what is the capital of india",
      options: ["Rajasthan", "Mumbai", "Delhi", "banglore"],
      answer: "Delhi",
      score: -1
    },
    {
      question: "what is the capital of madhya-pradesh",
      options: ["Bhopal", "Gwalior", "Jabalpur", "indore"],
      answer: "Bhopal",
      score: -1
    },
    {
      question: "what is the capital of Maharastra",
      options: ["Nagpur", "Mumbai", "pune", "Nasik"],
      answer: "Mumbai",
      score: -1
    },
    {
      question: "what is the capital of Utter-Pradesh",
      options: ["Mirjapur", "Agra", "Rurki", "Lakhnau"],
      answer: "Lakhnau",
      score: -1
    },
    {
      question: "what is the capital of UK(uttarakhand)",
      options: ["Dehradun", "Mesoor", "Rurki", "banglore"],
      answer: "Dehradun",
      score: -1
    }
  ];
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    
    while (currentIndex !== 0) {
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }

    return array;
  }

  useEffect(() => {
    shuffle(setData);
    setCurrentQues({
      data: setData[0],
      s_no: 1
    });
    console.log(setData);
  }, []);

  const [currentQues, setCurrentQues] = useState({
    data: {
        question: "what is the capital of Utter-Pradesh",
        options: ["Mirjapur", "Agra", "Rurki", "Lakhnau"],
        answer: "Lakhnau",
        score: -1
    },
    s_no: 1
  });
  const CheckAnswer = (value) => {
    setTimeout(() => {
      if (currentQues.data.answer === value) {
       
        alert("your answer is correct");
        setScore((preValue) => preValue + 5);
        
        setSubmition((preValue) => {
          preValue.push(true);
          return preValue;


        });
      } else {
        alert("your answer is incorrect");
      

        setSubmition((preValue) => {
          preValue.push(true);
          return preValue;
        });
      }
      if (currentQues.s_no === setData.length) {
        setQuizStatus(0);
      }
      setCurrentQues((preValue) => {
        return {
          data: setData[preValue.s_no],
          s_no: preValue.s_no + 1
        };
      });
    },1000);
  };

  const [score, setScore] = useState(0);
  const [submition, setSubmition] = useState([]);
  const [quizStatus, setQuizStatus] = useState(1);


  return (
    <div className="Quiz-container">
      <h2>React Quiz</h2>
      <p>Current Score : {score}</p>
      {quizStatus ? (
        <QuizQuestion
          dataq={currentQues.data}
          QestionNo={currentQues.s_no}
          totalQuestion={setData.length}
          CheckAnswer={CheckAnswer}
         
        />
      ) : (
        <div>Quize ended</div>
      )}
    </div>
  );
}
export default Quiz;