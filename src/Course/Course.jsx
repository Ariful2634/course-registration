import { useEffect, useState } from "react";
import Courses from "./Courses";

const Course = () => {
    const [loadData, setLoadData]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setLoadData(data))
    },[])

    return (
        <div>
            <div className="md:grid md:grid-cols-3 gap-5">
                {
                    loadData.map(loadData=><Courses key={loadData.id} loadData={loadData}></Courses>)
                }
            </div>
        </div>
    );
};

export default Course;
