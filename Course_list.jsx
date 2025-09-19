import reac from "./assets/react.svg";
import JS from "./assets/download.png";
import native from "./assets/download2.png";
import Course from "./Course";
function CourseList(){
const Courses =
[
    {
    id :1,
   name : "React JS Full Course",
    price : 15,
    image: reac,
    Rating : 5
    },
    {
    id :2,
    name : "Javascript Full Course",
    price : 20,
    image: JS,
    Rating : 5
    },
    {
    id : 3,
    name : "Native Course",
    price : 20,
    image: native,
    Rating : 4
    },
    {
    id : 4,
    name : "MERN Full Course",
    price : 25,
    image: reac,
    Rating : 1
    }
]
Courses.sort((a,b)=> b.Rating - a.Rating);
const res = Courses.filter((course)=> course.Rating > 1)
const courselist = res.map((Courses,index)=>
    <Course key = {index} name={Courses.name} price={Courses.price} image={Courses.image} Rating={Courses.Rating}  />)
         
    return<>
     {courselist}
    </>

}
export default CourseList;