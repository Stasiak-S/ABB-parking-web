import { Link } from "react-router-dom";
import "../styles/NavStyle.css";
function NavBar(props){
    function BoldLetters({linked, name, text}){
      if(name===props.Page){return <Link to={linked}><li id={name}><b>{text}</b></li></Link>}
      else{return <Link to={linked}><li id={name}>{text}</li></Link>}
      
    }
    return(
    <nav className="nav-bar">
        <BoldLetters linked="/reservations"
        name="ReservationsDates"
        text="Rezerwacje"/>
        <BoldLetters linked="/users"
        name="Users"
        text="Użytkownicy"/>
        <BoldLetters linked="/requests"
        name="Requests"
        text="Wnioski"/>
      </nav>);
}
export default NavBar;