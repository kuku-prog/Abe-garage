import React from "react";
import "./admin.css";
import { Link, Route, Routes } from "react-router-dom";

function Admin() {
	return (
		<div className="bg-container">
			<div className="admin-container">
				<h4>
					<Link to="/admin">ADMIN MENU</Link>
				</h4>
				<div className="list-container">
					<ul className="admin-list">
						<li>
							<Link to="/">Dashbord</Link>
						</li>
						<li>
							<Link to="/orders">Orders</Link>
						</li>
						<li>
							<Link to="/new-order">New order</Link>
						</li>
						<li>
							<Link to="/admin/add-employee">Add employee</Link>
						</li>
						<li>
							<Link to="/employee">Employee</Link>
						</li>
						<li>
							<Link to="/add-customer">Add customer</Link>
						</li>
						<li>
							<Link to="/customers">Customers</Link>
						</li>
						<li>
							<Link to="/servies">Servies</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Admin;
