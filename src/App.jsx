
import { useState } from 'react'
import './App.css'
import Course from './Course/Course'
import Credit from './Credit/Credit'
import Header from './Header/Header'
import Swal from 'sweetalert2'

function App() {
  const [course, setCourse] = useState([]);
  const [creditNumber,setCreditNumber]=useState(0);
  const [sendCredit,setSendCredit]=useState(0);
  

  const buttonHandler = send => {
    let count = send.credit
    console.log(send.credit)
    const isExist = course.find(item => item.id == send.id)
    if (isExist) {
      return Swal.fire({
        icon: 'error',
        text: 'This course is already selected',
      })
    }
    else {
      course.forEach(num=>{
        count=count+num.credit;
      })
      const creditHour=20-count;
      if(count>20){
        return Swal.fire({
          icon: 'error',
          text: "You can't take more than 20 credit",
        })
      }
      setCreditNumber(count)
      if(creditHour<0){
        return Swal.fire({
          icon: 'error',
          text: "Credit hour can't go below 0",
        })
      }
      setSendCredit(creditHour)
      const sen = [...course, send]
      setCourse(sen)
    }
  }


  return (
    <>

      <Header></Header>
      <div className='md:flex justify-around mt-10 #F3F3F3'>
        <Course buttonHandler={buttonHandler}></Course>
        <Credit course={course} creditNumber={creditNumber} sendCredit={sendCredit} ></Credit>
      </div>

    </>
  )
}

export default App
