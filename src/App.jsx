
import { useState } from 'react'
import './App.css'
import Course from './Course/Course'
import Credit from './Credit/Credit'
import Header from './Header/Header'

function App() {
  const [course, setCourse] = useState([])

  const buttonHandler = send => {
    const isExist = course.find(item => item.id == send.id)
    if (isExist) {
      return alert("You can't take same course multiple times")
    }
    else {
      const sen = [...course, send]
      setCourse(sen)
    }
  }


  return (
    <>

      <Header></Header>
      <div className='md:flex justify-around mt-10 #F3F3F3'>
        <Course buttonHandler={buttonHandler}></Course>
        <Credit course={course} ></Credit>
      </div>

    </>
  )
}

export default App
