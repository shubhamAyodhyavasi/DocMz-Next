import withDashboardLayout from "../../../../../components/layouts/dashboard-layout/withDashboardLayout";
import React from "react";

const DATA = {
  sender: {
    name: "Kamalesh Biswas",
    small_address: "Hingnara, chakdaha, Nadia",
    full_address: "West bengal, India"
  },
  reciver: {
    name: "Kamalesh Biswas",
    small_address: "Hingnara, chakdaha, Nadia",
    full_address: "West bengal, India"
  },
  payment: {
    method: "Debit Card",
    cardNo: "xxxxxxxxxxxxxxxx-2251",
    bank: "HDFC Bank"
  },
  order: {
    id: "#00124",
    date: "20/02/2020"
  },
  invoices: [
    {
      description: "General Consultation",
      quantity: 1,
      vat: 0,
      total: 200
    },
    {
      description: "Paid Consultation",
      quantity: 1,
      vat: 0,
      total: 250
    }
  ],
  subtotal: 350,
  discount: "-10",
  totalAmount: 315,
  otherInfo:
    "The invoices you make can be sent and paid online or downloaded as a PDF. Did we also mention that Invoice Generator lets you generate an unlimited The invoices you make can be sent and paid online or downloaded as a PDF. "
};

const PREFIX = 'kamalesh-'

function InvoiceCopy() {
  return (
    <div>
      <GenerateInvoice data={DATA} />
    </div>
  );
}


const GenerateInvoice = props => {
  return (
    <div className="generate_invoice">
      <div className="top_section">
        <div className="left_hand_side">
          <div className={`${PREFIX}side`}>
            <h3 >Invoice Form</h3>
            <h5>{props.data.sender.name}</h5>
            <h5>{props.data.sender.small_address}</h5>
            <h5>{props.data.sender.full_address}</h5>
          </div>
          <div className={`${PREFIX}side`}>
            <h3>Payment Method</h3>
            <h5>{props.data.payment.method}</h5>
            <h5>{props.data.payment.cardNo}</h5>
            <h5>{props.data.payment.bank}</h5>
          </div>
        </div>
        <div className="right_hand_side">
          <div>
            <h5>Order: {props.data.order.id}</h5>
            <h5>Issued: {props.data.order.date}</h5>
          </div>
          <div>
            <h3>Invoice To</h3>
            <h5>{props.data.reciver.name}</h5>
            <h5>{props.data.reciver.small_address}</h5>
            <h5>{props.data.reciver.full_address}</h5>
          </div>
        </div>
      </div>
      <div className="table_container">
        <table>
          <thead>
            <th>Description</th>
            <th>Quality</th>
            <th>VAT</th>
            <th>Total</th>
          </thead>
          <tbody>
            {props.data.invoices.map(row => (
              <tr>
                <td>{row.description}</td>
                <td>{row.quantity}</td>
                <td>${row.vat}</td>
                <td>${row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <div>
            <h3>Subtotal:</h3>
            <p>${props.data.subtotal}</p>
          </div>
          <div>
            <h3>Discount:</h3>
            <p>{props.data.discount}%</p>
          </div>
          <div>
            <h3>Total Amount:</h3>
            <p>${props.data.totalAmount}</p>
          </div>
        </div>
      </div>
      <div>
        <p>{props.data.otherInfo}</p>
      </div>
    </div>
  );
};

export default withDashboardLayout(InvoiceCopy)