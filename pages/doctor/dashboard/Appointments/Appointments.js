import withDashboardLayout from "../../../../components/layouts/dashboard-layout/withDashboardLayout";
import React from "react";
import {
  AimOutlined,
  EyeFilled,
  PrinterFilled,
  ClockCircleFilled,
  MailFilled,
  PhoneFilled,
  RightOutlined,
  CloseOutlined,
  CheckOutlined
} from "@ant-design/icons";

const DATA = [
  {
    name: "Kamalesh Biswas",
    profile_pic:
      "https://musicglue-images-prod.global.ssl.fastly.net/boyintherain/post/anemoi/ProfilePic.jpg?u=aHR0cHM6Ly9tdXNpY2dsdWUtcHJvZHVjdGlvbi1wdWJsaWMtcHJvZmlsZS1hc3NldHMuczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vNTEvMTAvM2YvMTcvOGUvODAvNDkvMTIvOGEvYWYvZmEvMjAvM2MvZWIvZTEvMjcvUHJvZmlsZVBpYy5qcGc%3D&mode=fit&width=800&v=2",
    dateTime: "14 Nov 2019, 10:00 AM",
    location: "Newyork, United States",
    mail: "bkamalesh99@gmail.com",
    phone: "+91 8001981993"
  },
  {
    name: "Kamalesh Biswas",
    profile_pic:
      "https://musicglue-images-prod.global.ssl.fastly.net/boyintherain/post/anemoi/ProfilePic.jpg?u=aHR0cHM6Ly9tdXNpY2dsdWUtcHJvZHVjdGlvbi1wdWJsaWMtcHJvZmlsZS1hc3NldHMuczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vNTEvMTAvM2YvMTcvOGUvODAvNDkvMTIvOGEvYWYvZmEvMjAvM2MvZWIvZTEvMjcvUHJvZmlsZVBpYy5qcGc%3D&mode=fit&width=800&v=2",
    dateTime: "14 Nov 2019, 10:00 AM",
    location: "Newyork, United States",
    mail: "bkamalesh99@gmail.com",
    phone: "+91 8001981993"
  },
  {
    name: "Kamalesh Biswas",
    profile_pic:
      "https://musicglue-images-prod.global.ssl.fastly.net/boyintherain/post/anemoi/ProfilePic.jpg?u=aHR0cHM6Ly9tdXNpY2dsdWUtcHJvZHVjdGlvbi1wdWJsaWMtcHJvZmlsZS1hc3NldHMuczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vNTEvMTAvM2YvMTcvOGUvODAvNDkvMTIvOGEvYWYvZmEvMjAvM2MvZWIvZTEvMjcvUHJvZmlsZVBpYy5qcGc%3D&mode=fit&width=800&v=2",
    dateTime: "14 Nov 2019, 10:00 AM",
    location: "Newyork, United States",
    mail: "bkamalesh99@gmail.com",
    phone: "+91 8001981993"
  }
];

const PREFIX = "kamalesh-";

function Appiontments() {
  return (
    <div>
      {DATA.map(item => (
        <PatientAppiontments data={item} />
      ))}
    </div>
  );
}

const PatientAppiontments = props => {
  return (
    <div className={`${PREFIX}appiontments`}>
      <div className={`${PREFIX}profile`}>
        <img src={props.data.profile_pic} />
        <div className={`${PREFIX}details`}>
          <h2>{props.data.name}</h2>
          <div>
            <ClockCircleFilled className={`${PREFIX}icon`} />{" "}
            {props.data.dateTime}
          </div>
          <div>
            <AimOutlined className={`${PREFIX}icon`} />
            {props.data.location}
          </div>
          <div>
            <MailFilled className={`${PREFIX}icon`} />
            {props.data.mail}
          </div>
          <div>
            <PhoneFilled className={`${PREFIX}icon`} />
            {props.data.phone}
          </div>
        </div>
      </div>

      <div className={`${PREFIX}actions`}>
        <button className={`${PREFIX}button-normal`}>
          <EyeFilled className={`${PREFIX}action-icon`}/> View
        </button>
        <button className={`${PREFIX}button-green`}>
          <CheckOutlined className={`${PREFIX}action-icon`}/> Accept
        </button>
        <button className={`${PREFIX}button-red`}>
          <CloseOutlined className={`${PREFIX}action-icon`}/> Cancel
        </button>
      </div>
    </div>
  );
};

export default withDashboardLayout(Appiontments)