import React from "react";
import Admin from "../../components/Admin/AdminMenu/Admin";
import AddVehicle from "../../pages/admin/AddVehicle/AddVehicle";
import Vehiclewithicon from "../../pages/admin/AddVehicle/Vehiclewithicon";

function AddVehiclePage() {
	return (
		<>
			<div className="container-fluid admin-page">
				<div className="row">
					<div className="col-md-3 admin-left-side">
						<Admin />
					</div>
					<div className=" col-md-9 admin-right-side">
						<Vehiclewithicon />
					</div>
				</div>
			</div>
		</>
	);
}

export default AddVehiclePage;
