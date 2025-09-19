import PropTypes from "prop-types";
// const list = "10";
function Course(props) {

  function handleClick(discount) {
    alert("You Have Purchased "+ props.name +" Sucessfully "+discount+ "% Discount Applied");
    console.log(props.name + " Purchased Sucessfully");
  }
  function handlelike(){
    alert("You Liked "+ props.name);
    console.log(props.name + "Liked");
  }


    return (
      props.name && <div className="card">
        {" "}
        {/* styles.card means adding the separate module course.module.css into course.jsx and first we have to import it then use it as like variable
    style = {styles} => means inline css method which is create object added into style tag and mention {styles}*/}
        {/* <h1>List of Courses : {list}</h1> {/*only we can use variables in "{}" & any js code can write*/}
        <img src={props.image} alt="" />
        <h3>{props.name}</h3>
        <p> <b>Price : </b>${props.price}</p>
        <button onClick={()=> handleClick(20)}>Buy Now</button>
        <span><button className="liked" onClick={handlelike}>❤️</button></span>
      </div>
    );
  }
  Course.propTypes = {
    name: PropTypes.string,
    Rating: PropTypes.number,
    price: PropTypes.string,
    image: PropTypes.string,
    show: PropTypes.bool
  }
  export default Course;
