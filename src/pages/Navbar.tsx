import {NavLink} from "react-router-dom"
import BgImageDesktop from "../../assets/images/bg-sidebar-desktop.svg"
import { ImProfile } from "react-icons/im";
import { ImTicket } from "react-icons/im";
import {ImBriefcase} from "react-icons/im"
import {ImUsers} from "react-icons/im"




const Navbar = () => {
    // const navigate = useNavigate();
    return (
    <div className="flex h-screen">
      <nav className='flex flex-col font-small gap-4 rounded-xl p-2' 
    style={{ backgroundImage: `url(${BgImageDesktop})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width:"250px",
}}> 
<ul className="flex flex-col items-center font-medium">
  <li>
    <NavLink to="/">
      <div className="flex flex-row items-center gap-2 text-white xl  hover:text-blue-300">
       <ImProfile/>
        <span>Your Info</span>
      </div>
    
    </NavLink>
  </li>
  <li>
    <NavLink to="/your-selectPlan">
    <div className="flex flex-row items-center gap-2 text-white xl hover:text-blue-300">
        <ImTicket/>
        <span>Select Plan</span>
      </div>
    </NavLink>
  </li>
  <li>
    <NavLink to="/your-addOn">
    <div className="flex flex-row items-center gap-2 text-white xl  hover:text-blue-300">
        <ImBriefcase/>
        <span>Add On</span>
      </div>
    </NavLink>
  </li>
<li>
  <NavLink to="/your-summary">
  <div className="flex flex-row items-center gap-2 text-white xl  hover:text-blue-300">
        <ImUsers/>
        <span>Summary</span>
      </div>
    </NavLink>
  </li>  
</ul>
      {/* <button className="border border-black-100 p-2" onClick={()=>navigate('all-activity')}>View All Activities</button> */}

      {/* <button className="border border-black-100 p-2" onClick={()=>navigate('your-info')}>Your Info</button>
      <button className="border border-black-100 p-2" onClick={()=>navigate('your-selectPlan')}>Select Plan</button>
      <button className="border border-black-100 p-2" onClick={()=>navigate('your-addOn')}>Your Add ons</button>
      <button className="border border-black-100 p-2" onClick={()=>navigate('your-summary')}>Summary</button> */}
       </nav>
    </div>
  )
}

export default Navbar
