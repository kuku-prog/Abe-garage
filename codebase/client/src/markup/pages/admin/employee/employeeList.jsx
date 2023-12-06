import React from "react";
import './employee.css'
import Admin from "../../../components/Admin/AdminMenu/Admin";
import AdminTable from "../../../components/tables/AdminTable";

function EmployeeList() {
	return (
		<>
			<div className="container">
			<div className="container-fluid admin-page">
				<div className="row">
					<div className="col-md-3 admin-left-side">
						<Admin />
					</div>
					<div className=" col-md-9 admin-right-side">
							<h1>Employee list</h1>
							<AdminTable  className='container'/>
					</div>
				</div>
			</div>
			</div>
		
		</>
	);
}

export default EmployeeList;
