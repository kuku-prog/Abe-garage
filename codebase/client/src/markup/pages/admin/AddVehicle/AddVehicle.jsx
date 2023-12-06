// POST /api/vehicle HTTP/1.1
// Content-Type: application/json
// Host: localhost:8080
// {
//    "customer_id": 1,
//    "vehicle_year": 2022,
//    "vehicle_make": "Tesla",
//    "vehicle_model": "Model S",
//    "vehicle_type": "Sedan",
//    "vehicle_mileage": "10000",
//    "vehicle_tag": "9890Ab2",
//    "vehicle_serial": "458008887783543435553434",
//    "vehicle_color": "Silver"

import React, { useState } from "react";
function AddVehicle() {
	const [form, setForm] = useState({});
	const [errors, setErrors] = useState({});

	const hadleSubmit = async (e) => {
		e.preventDefault();
	};
	return (
		<>
			<div>
				<div className="form-column col-lg-7">
					<div className="inner-column">
						<div className="contact-form">
							<form onSubmit={hadleSubmit} id="contact-form">
								<div className="row clearfix">
									<div className="form-group col-md-12">
										<br />
										<b>
											<h2>Add a new Vehicle</h2>
										</b>
										<br />
										<input
											type="text"
											name="vehicle_year"
											placeholder="Vehicle year"
											required
											onChange={(e) => {
												setForm({
													...form,
													vehicle_year: e.target.value,
												});
											}}
										/>
									</div>
									<div className="form-group col-md-12">
										<input
											type="text"
											name="vehicle_make"
											placeholder="Vehicle make"
											required
											onChange={(e) => {
												setForm({
													...form,
													vehicle_make: e.target.value,
												});
											}}
										/>
									</div>
									<div className="form-group col-md-12">
										<input
											type="text"
											name="vehicle_model"
											placeholder="Vehicle model"
											required
											onChange={(e) => {
												setForm({
													...form,
													vehicle_model: e.target.value,
												});
											}}
										/>
									</div>
									<div className="form-group col-md-12">
										<input
											type="text"
											name="vehicle_type"
											placeholder="Vehicle type"
											required
											onChange={(e) => {
												setForm({
													...form,
													vehicle_type: e.target.value,
												});
											}}
										/>
									</div>

									<div className="form-group col-md-12">
										<input
											type="text"
											name="vehicle_mileage"
											placeholder="Vehicle mileage"
											required
											onChange={(e) => {
												setForm({
													...form,
													vehicle_mileage: e.target.value,
												});
											}}
										/>
									</div>
									<div className="form-group col-md-12">
										<input
											type="text"
											name="vehicle_tag"
											placeholder="Vehicle tag"
											required
											onChange={(e) => {
												setForm({
													...form,
													vehicle_tag: e.target.value,
												});
											}}
										/>
									</div>
									<div className="form-group col-md-12">
										<input
											type="text"
											name="vehicle_serial"
											placeholder="Vehicle serial"
											required
											onChange={(e) => {
												setForm({
													...form,
													vehicle_serial: e.target.value,
												});
											}}
										/>
									</div>
									<div className="form-group col-md-12">
										<input
											type="text"
											name="vehicle_color"
											placeholder="Vehicle color"
											required
											onChange={(e) => {
												setForm({
													...form,
													vehicle_color: e.target.value,
												});
											}}
										/>
									</div>
									{/* <div className="form-group col-md-12">
										<button
											className="theme-btn btn-style-one"
											type="submit"
											data-loading-text="Please wait..."
										>
											<span>ADD VEHICLE</span>
										</button>
									</div> */}
									<div className="form-group col-md-12">
										<input
											id="form_botcheck"
											name="form_botcheck"
											className="form-control"
											type="hidden"
										/>
										<button
											className="theme-btn btn-style-one"
											type="submit"
											data-loading-text="Please wait..."
										>
											<span>ADD VEHICLE</span>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddVehicle;
