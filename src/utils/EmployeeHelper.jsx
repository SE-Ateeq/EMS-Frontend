import axios from "axios";
import { useNavigate } from "react-router-dom";

export const columns = [
  {
      name: "S No",
      selector: (row) => row.sno,
      width: "60px"
  },
  {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      width: "100px"

  },
  {
    name: "Image",
    selector: (row) => row.profileImage,
    width: "70px"

   
  },
  {
    name: "Department",
    selector: (row) => row.dep_name,
    width: "100px"

    
  },
  {
    name: "DOB",
    selector: (row) => row.dob,
    sortable: true,
    width: "100px"

  },

  {
      name: "Action",
      selector: (row) => row.action,
      center: true
  }, 
]

export const fetchDepartments = async () =>{
       
         try {
          const response = await axios.get("https://ems-backend-omega.vercel.app/api/department", {
            headers: {
              "Authorization" : `Bearer ${localStorage.getItem("token")}`
            }
          })
          if(response.data.success){
            return response.data.departments || [];
          }
         } catch(error) {
          if(error.response && !error.response.data.success){
            alert(error.response.data.error)
          }
         }
         return [];
};

// Employees for salary form

export const getEmployees = async (id) =>{
  let employees; 
     
       try {
        const response = await axios.get(`https://ems-backend-omega.vercel.app/api/employee/department/${id}`, {
          headers: {
            "Authorization" : `Bearer ${localStorage.getItem("token")}`,
          }
        });
        if(response.data.success){
              employees = response.data.employees;
        }
       } catch(error) {
        if(error.response && !error.response.data.success){
          alert(error.response.data.error)
        }
       }
       return employees
};


export const EmployeeButtons = ({Id}) =>{
  const navigate = useNavigate();

  return(
      <div className="flex space-x-2">
          <button className="px-3 py-1 bg-teal-600 text-white"
              onClick={() => navigate(`/admin-dashboard/employees/${Id}`)}
          >View</button>
          <button className="px-3 py-1 bg-blue-600 text-white"
          onClick={() => navigate(`/admin-dashboard/employees/edit/${Id}`)}
          >Edit</button>
          <button className="px-2 py-1 bg-yellow-600 text-white"
          onClick={()=> navigate(`/admin-dashboard/employees/salary/${Id}`)}
          >Salary</button>
          <button className="px-2 py-1 bg-red-600 text-white"
          onClick={()=> navigate(`/admin-dashboard/employees/leaves/${Id}`)}

          >Leave</button>
      </div> 
  )
}
