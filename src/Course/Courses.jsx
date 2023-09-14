// import { FaBookOpen } from 'react-icons/fa';
import PropTypes from 'prop-types'
// import Credit from '../Credit/Credit';



const Courses = ({loadData,buttonHandler}) => {
    const {course_details,course_img, course_name, credit, price}=loadData;
    return (
        <div className="shadow-lg p-4 w-[300px] bg-[#FFF] space-y-3">
           <div className="flex justify-center">
           <img className="w-auto h-40 rounded-lg" src={course_img} alt="" />
           </div>
            <h1 className="font-semibold text-l">{course_name}</h1>
            <div className="w-[270px]">
            <p className=" font-[400]">{course_details}</p>
            </div>
            <div className="flex justify-between items-center mb-6">
                <p>$ Price: {price} </p>
                <p> Credit: {credit} hr</p>
            </div>
            <button onClick={()=>buttonHandler(loadData)}  className="bg-[#2F80ED] px-28 rounded-lg py-2 text-white font-semibold">Select</button>
        </div>
    );
};

Courses.propTypes = {
    loadData: PropTypes.object
}
Courses.propTypes = {
    buttonHandler: PropTypes.func
}

export default Courses;