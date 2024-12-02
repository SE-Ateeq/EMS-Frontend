import { useNavigate } from "react-router-dom";

export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
    width: "70px",
  },
  {
    name: "Emp ID",
    selector: (row) => row.employeeId,
    width: "95px",
  },
  {
    name: "Name",
    selector: (row) => row.name,
    width: "100px",
  },
  {
    name: "Leave Type",
    selector: (row) => row.leaveType,
    width: "100px",
  },
  {
    name: "Department",
    selector: (row) => row.department,
    width: "100px",
  },
  {
    name: "Days",
    selector: (row) => row.days,
    width: "60px",
  },
  {
    name: "Status",
    selector: (row) => row.status,
    width: "80px",
  },
  {
    name: "Action",
    selector: (row) => row.action,
    center: true,
  },
];

export const LeaveButtons = ({ Id }) => {
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/admin-dashboard/leaves/${id}`);
  };

  return (
    <button
      className="px-4 py-1 bg-teal-500 rounded text-white hover:bg-teal-600"
      onClick={() => handleView(Id)}
    >
      View
    </button>
  );
};