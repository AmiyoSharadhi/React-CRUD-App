import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    let navigate=useNavigate();
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:44365/api/GetAllEmployees');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.Result);

        setData(data.Result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

let handleDelete=(id)=>{
    axios.delete(`https://localhost:44365/api/DeleteEmpByID?empid=${id}`)
    alert("Data deleted successfully")
}
  return (
    <div className='container my-5'>
        <h1 className='my-3 d-flex justify-content-center'>List of Users</h1>
        <div className="d-flex justify-content-end my-3" > <Link className='btn btn-success' to='/create'>Add Employee</Link> </div>
         <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee Phone</th>
            <th>Employee Email</th>
            <th>Employee Age</th>
            <th>Employee Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.EmpName}</td>
              <td>{item.EmpPhone}</td>
              <td>{item.EmpEmail}</td>
              <td>{item.EmpAge}</td>
              <td>{item.EmpAddress}</td>
             <td>
                 <Link to={`/Update/${item.empid}`}>Edit</Link>
                 <button className='btn btn-sm btn-danger m-2' onClick={()=>{{handleDelete(item.empid)}}}>Delete</button>
             </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
