import React from 'react'
import './admin.css'
import { Route, Routes } from "react-router-dom";


function Admin() {
  return (
		<div className="admin-container">
			<h4>ADMIN MENU</h4>
			<div className="list-container">
				<ul className="admin-list">
					<li>
						<a href="/dashboard">Dashbord</a>
					</li>
					<li>
						<a href="/orders">Orders</a>
					</li>
					<li>
						<a href="/new-order">New order</a>
					</li>
					<li>
						<a href="/admin/add-employee">Add employee</a>
					</li>
					<li>
						<a href="/employee">Employee</a>
					</li>
					<li>
						<a href="/add-customer">Add customer</a>
					</li>
					<li>
						<a href="/customers">Customers</a>
					</li>
					<li>
						<a href="/servies">Servies</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Admin