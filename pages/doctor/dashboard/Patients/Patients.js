import withDashboardLayout from "../../../../components/layouts/dashboard-layout/withDashboardLayout";
import React from "react";
import { AimOutlined } from "@ant-design/icons";

const DATA = [
  {
    id: "P0018",
    name: "Kamalesh Biswas",
    age: 22,
    location: "Kolkata,india",
    phone: "8001981993",
    bloodGroup: "A+"
  }
];

function Patients() {
  return <div className="patient_container">
      <PatientCard data={DATA[0]} />
      <PatientCard data={DATA[0]} />
      <PatientCard data={DATA[0]} />
      <PatientCard data={DATA[0]} />
      <PatientCard data={DATA[0]} />
      <PatientCard data={DATA[0]} />

  </div> 
}

const PatientCard = props => (
  <div className="patientCard">
    <div>
      <img className="avater" src="https://musicglue-images-prod.global.ssl.fastly.net/boyintherain/post/anemoi/ProfilePic.jpg?u=aHR0cHM6Ly9tdXNpY2dsdWUtcHJvZHVjdGlvbi1wdWJsaWMtcHJvZmlsZS1hc3NldHMuczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vNTEvMTAvM2YvMTcvOGUvODAvNDkvMTIvOGEvYWYvZmEvMjAvM2MvZWIvZTEvMjcvUHJvZmlsZVBpYy5qcGc%3D&mode=fit&width=800&v=2" />
      <h3>{props.data.name}</h3>
      <h5>
        Patient ID: <p>{props.data.id}</p>
      </h5>
      <h5>
        <AimOutlined />
        <p>{props.data.location}</p>
      </h5>
    </div>
    <hr></hr>
    <div className="details">
      <div>
        <h4>Phone</h4>
        <h4 style={{ fontWeight: 500 }}>{props.data.phone}</h4>
      </div>
      <div>
        <h4>Age</h4>
        <h4 style={{ fontWeight: 500 }}>{props.data.age}</h4>
      </div>
      <div>
        <h4>Blood Group</h4>
        <h4 style={{ fontWeight: 500 }}>{props.data.bloodGroup}</h4>
      </div>
    </div>
  </div>
);

export default withDashboardLayout(Patients)