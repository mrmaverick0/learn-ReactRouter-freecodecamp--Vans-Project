import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const activeStyle={
    fontWeight: "bold",
  textDecoration: "underline"
  }
  return (
    <>
      <nav className="host-nav">
        <NavLink to="." end style={({isActive})=> isActive?activeStyle:null}>Dashboard</NavLink>
        <NavLink to="/host/income"style={({isActive})=> isActive?activeStyle:null}>Income</NavLink>
        <NavLink to="/host/vans"style={({isActive})=> isActive?activeStyle:null}>Vans</NavLink>
        <NavLink to="/host/reviews"style={({isActive})=> isActive?activeStyle:null}>Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
export default HostLayout;
