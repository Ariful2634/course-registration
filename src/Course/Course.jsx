import { useEffect, useState } from "react";
import Courses from "./Courses";
import PropTypes from 'prop-types'

const Course = ({buttonHandler}) => {
    const [loadData, setLoadData]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setLoadData(data))
    },[])

    return (
        <div>
            <div className="md:grid md:grid-cols-3 gap-8 md:max-w-4xl">
                {
                    loadData.map(loadData=><Courses key={loadData.id} loadData={loadData} buttonHandler={buttonHandler} ></Courses>)
                }
            </div>
        </div>
    );
};

Course.propTypes = {
    buttonHandler: PropTypes.func
}

export default Course;
