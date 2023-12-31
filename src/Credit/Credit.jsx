/* eslint-disable react/prop-types */



const Credit = ({course,creditNumber,sendCredit}) => {
    // console.log(course)

    
    return (
        <div className="shadow-2xl p-5 bg-[#FFF] md:w-[23%] h-80 mt-5 md:mt-0 ">
            <h1 className="text-[#2F80ED] text-start font-semibold  mb-2">Credit Hour Remaining {sendCredit} hr</h1>
            <hr />
            <h1 className="text-start mt-2 font-semibold mb-2 text-[#1C1B1B]">Course Name <br />
               
            </h1>
            <div className="h-[180px]">
                {
                    course.map(nam=><li key={nam.id} className="list-decimal text-start mb-2">{nam.course_name}</li>)
                }
            </div>
            <hr />
            <h1 className="mt-2 font-semibold text-start">Total Credit Hour: {creditNumber} </h1>

        </div>
    );
};



export default Credit;