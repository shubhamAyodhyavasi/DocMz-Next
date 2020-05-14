import withDashboardLayout from "../../../../components/layouts/dashboard-layout/withDashboardLayout";
import React from "react";
import { AimOutlined, EyeFilled, PrinterFilled } from "@ant-design/icons";
// import '../../../../style/pages'


const DATA = [
  {
    id: "#PT0016",
    profile_pic:
      "https://musicglue-images-prod.global.ssl.fastly.net/boyintherain/post/anemoi/ProfilePic.jpg?u=aHR0cHM6Ly9tdXNpY2dsdWUtcHJvZHVjdGlvbi1wdWJsaWMtcHJvZmlsZS1hc3NldHMuczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vNTEvMTAvM2YvMTcvOGUvODAvNDkvMTIvOGEvYWYvZmEvMjAvM2MvZWIvZTEvMjcvUHJvZmlsZVBpYy5qcGc%3D&mode=fit&width=800&v=2",
    invoiceNo: "$ INV-0010",
    name: "Kamalesh Biswas",
    amount: 450,
    paid_on: "14 Nov 2019"
  },
  {
    id: "#PT0016",
    profile_pic:
      "https://musicglue-images-prod.global.ssl.fastly.net/boyintherain/post/anemoi/ProfilePic.jpg?u=aHR0cHM6Ly9tdXNpY2dsdWUtcHJvZHVjdGlvbi1wdWJsaWMtcHJvZmlsZS1hc3NldHMuczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vNTEvMTAvM2YvMTcvOGUvODAvNDkvMTIvOGEvYWYvZmEvMjAvM2MvZWIvZTEvMjcvUHJvZmlsZVBpYy5qcGc%3D&mode=fit&width=800&v=2",
    invoiceNo: "$ INV-0010",
    name: "Kamalesh Biswas",
    amount: 450,
    paid_on: "14 Nov 2019"
  },
  {
    id: "#PT0016",
    profile_pic:
      "https://musicglue-images-prod.global.ssl.fastly.net/boyintherain/post/anemoi/ProfilePic.jpg?u=aHR0cHM6Ly9tdXNpY2dsdWUtcHJvZHVjdGlvbi1wdWJsaWMtcHJvZmlsZS1hc3NldHMuczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vNTEvMTAvM2YvMTcvOGUvODAvNDkvMTIvOGEvYWYvZmEvMjAvM2MvZWIvZTEvMjcvUHJvZmlsZVBpYy5qcGc%3D&mode=fit&width=800&v=2",
    invoiceNo: "$ INV-0010",
    name: "Kamalesh Biswas",
    amount: 450,
    paid_on: "14 Nov 2019"
  },
  {
    id: "#PT0016",
    profile_pic:
      "https://musicglue-images-prod.global.ssl.fastly.net/boyintherain/post/anemoi/ProfilePic.jpg?u=aHR0cHM6Ly9tdXNpY2dsdWUtcHJvZHVjdGlvbi1wdWJsaWMtcHJvZmlsZS1hc3NldHMuczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vNTEvMTAvM2YvMTcvOGUvODAvNDkvMTIvOGEvYWYvZmEvMjAvM2MvZWIvZTEvMjcvUHJvZmlsZVBpYy5qcGc%3D&mode=fit&width=800&v=2",
    invoiceNo: "$ INV-0010",
    name: "Kamalesh Biswas",
    amount: 450,
    paid_on: "14 Nov 2019"
  },
  {
    id: "#PT0016",
    profile_pic:
      "https://musicglue-images-prod.global.ssl.fastly.net/boyintherain/post/anemoi/ProfilePic.jpg?u=aHR0cHM6Ly9tdXNpY2dsdWUtcHJvZHVjdGlvbi1wdWJsaWMtcHJvZmlsZS1hc3NldHMuczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vNTEvMTAvM2YvMTcvOGUvODAvNDkvMTIvOGEvYWYvZmEvMjAvM2MvZWIvZTEvMjcvUHJvZmlsZVBpYy5qcGc%3D&mode=fit&width=800&v=2",
    invoiceNo: "$ INV-0010",
    name: "Kamalesh Biswas",
    amount: 450,
    paid_on: "14 Nov 2019"
  },
  {
    id: "#PT0016",
    profile_pic:
      "https://musicglue-images-prod.global.ssl.fastly.net/boyintherain/post/anemoi/ProfilePic.jpg?u=aHR0cHM6Ly9tdXNpY2dsdWUtcHJvZHVjdGlvbi1wdWJsaWMtcHJvZmlsZS1hc3NldHMuczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vNTEvMTAvM2YvMTcvOGUvODAvNDkvMTIvOGEvYWYvZmEvMjAvM2MvZWIvZTEvMjcvUHJvZmlsZVBpYy5qcGc%3D&mode=fit&width=800&v=2",
    invoiceNo: "$ INV-0010",
    name: "Kamalesh Biswas",
    amount: 450,
    paid_on: "14 Nov 2019"
  }
];

const PREFIX = 'kamalesh-'

function Invoice() {
  return (
    <div>
      <InvoiceTable data={DATA} />
    </div>
  );
}

const InvoiceTable = props => {
  return (
    <table className={`${PREFIX}invoice_table`}>
      <thead className="_thead">
        <tr className="_tr">
          <th className="_th">Invoice No</th>
          <th className="_th">Patient</th>
          <th className="_th">Amount</th>
          <th className="_th">Paid On</th>
          <th className="_th"></th>
        </tr>
      </thead>
      <tbody className="_tbody">
        {props.data.map(row => (
          <tr className="_tr">
            <td className="_td" style={{ fontSize: 14, fontWeight: 700}}>{row.invoiceNo}</td>
            <td className="_td">
              <PicRoom
                data={{
                  image_link: row.profile_pic,
                  name: row.name,
                  id: row.id
                }}
              />
            </td>
            <td className="_td">${row.amount}</td>
            <td className="_td">{row.paid_on}</td>
            <td className="_td"><ButtonGroup/></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const PicRoom = props => (
  <div className="invoice_patient">
    <img className="ivoice_avater" src={props.data.image_link} />
    <div>
      <h4>{props.data.name}</h4>
      <p>{props.data.id}</p>
    </div>
  </div>
);

const ButtonGroup = () => {
    return <div >
        <button className="invoice_button" to="/invoice/copy">
            <EyeFilled/>
            View
        </button>
        <button className="invoice_button">
            <PrinterFilled/>
            {' Print'}
        </button>
    </div>
}

export default withDashboardLayout(Invoice)