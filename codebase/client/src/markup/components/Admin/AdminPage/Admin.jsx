import React from 'react'
import './admin.css'
import { Link, Route, Routes } from "react-router-dom";


function Admin() {
  return (
		<div className="bg-container" >
			<div className="admin-container" >
				<h4>
					<Link to="/admin">ADMIN MENU</Link>
				</h4>
				<div className="list-container">
					<ul className="admin-list">
						<li>
							<Link href="/dashboard">Dashbord</Link>
						</li>
						<li>
							<Link href="/orders">Orders</Link>
						</li>
						<li>
							<Link href="/new-order">New order</Link>
						</li>
						<li>
							<Link to="/admin/add-employee">Add employee</Link>
						</li>
						<li>
							<Link href="/employee">Employee</Link>
						</li>
						<li>
							<Link href="/add-customer">Add customer</Link>
						</li>
						<li>
							<Link href="/customers">Customers</Link>
						</li>
						<li>
							<Link href="/servies">Servies</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Admin