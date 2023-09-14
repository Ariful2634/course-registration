
import './App.css'
import Course from './Course/Course'
import Credit from './Credit/Credit'
import Header from './Header/Header'

function App() {
  

  return (
    <>
      
      <Header></Header>
      <div className='md:flex justify-around mt-10 #F3F3F3'>
      <Course></Course>
      <Credit></Credit>
      </div>
      
    </>
  )
}

export default App
