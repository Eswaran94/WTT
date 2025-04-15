document.getElementById("date").textContent = new Date().toLocaleDateString();

const data = [
  ["Single Count", "Single Vehicle Count", "$3"],
  ["2 Class Vehicle Counts", "Light & Heavy Vehicles", "$5"],
  ["3 Class Vehicle Counts", "Cars, Buses, and Trucks", "$5"],
  ["7 Class Vehicle Counts", "Detailed Vehicle Types", "$6"],
  ["13 Class Vehicle Counts", "Detailed Vehicle Classification", "$8"],
  ["12 Class Vehicle Counts", "Standard Vehicle Classification", "$7"],
  ["Pedestrian Surveys", "Pedestrian Movement and Volume", "$5"],
  ["Bicycle Surveys", "Bicycle Traffic Count", "$3"],
  ["Parking Surveys", "Parking Occupancy and Duration", "$4"],
  ["Number Plate Surveys", "Automatic Number Plate Recognition", "$5"],
  ["Intersection Surveys", "Turning Movements and Delay", "$6"],
  ["Queue Length Surveys", "Vehicle Queue Length Measurement", "$5"],
  ["Roundabout Counts", "Vehicle Movements at Roundabouts", "$6"],
  ["Bus Stop Surveys", "Bus Arrival and Departure", "$5"],
  ["Truck Company Surveys", "Truck Company Name Identification", "$5"],
  ["Carrying Company Surveys", "Goods Carrying Company Name Identification", "$5"]
];

const tbody = document.getElementById("quotation-body");
data.forEach(row => {
  const tr = document.createElement("tr");
  row.forEach(cell => {
    const td = document.createElement("td");
    td.textContent = cell;
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});
