import React from "react";
import AddVehicle from "./AddVehicle";
function Vehiclewithicon() {
	return (
		<>
			<div className="container-fluid admin-page">
				<div className="row">
					<div className="col-md-3 admin-left-side">
						<h2>icon</h2>
					</div>

					<div className=" col-md-9 admin-right-side">
						<h2>Customer!</h2>
						<AddVehicle />
					</div>
				</div>
			</div>
		</>
	);
}

export default Vehiclewithicon;
