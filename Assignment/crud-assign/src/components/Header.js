import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
// import '../CSS/Header.css'
import Nav from 'react-bootstrap/Nav';


const Header = () => {
    const [activeTab, setActiveTab]=useState("Home");

  return (
    // <>
    //     <div className='header'>
    //     {/* <p className='logo'>Employee Management System</p> */}
    //     <div className='header-right'>
    //         <Link to='/'>
    //             <p className={`${activeTab === "Home" ? "active": ""}`} onClick={()=> setActiveTab("Home")}>Home</p>
    //         </Link>
    //         <Link to='/add'>
    //             <p className={`${activeTab === "Add Employee" ? "active": ""}`} onClick={()=> setActiveTab("AddEmployee")}>Add Employee</p>
    //         </Link>
    //     </div>
    // </div>
    // </>

    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">AddEmployee</Nav.Link>
      </Nav.Item>
      
    </Nav>
  )
}

export default Header;