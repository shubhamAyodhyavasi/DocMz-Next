import withDashboardLayout from "../../../components/layouts/dashboard-layout/withDashboardLayout";
import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Table, Input, Button } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';


import { getDoctorById } from "../../../services/api";
const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Joe Black',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park'
    },
  ];
  
  
class dashboard extends Component {
  constructor() {
    super();
    this.state = {
      todaysAppointments: [],
      totalAppointments: []
    };
  }
  componentDidMount() {
    const { loggedInDoctor } = this.props;
    getDoctorById(loggedInDoctor._id)
      .then(({ data }) => {
        const appointments = data.data?.appointments.filter(
          appointment => appointment.booked
        );
        const todaysAppointments = appointments.filter(appointment =>
          moment(appointment.bookedFor).isSame(moment(), "day")
        );
        const totalAppointments = appointments.filter(
          appointment =>
            !moment(appointment.bookedFor).isBefore(moment(), "day")
        );
        const tatalAppData = totalAppointments.map((appointment, key) => ({
            key,
            name: appointment.patient?.email,
            date: moment(appointment.bookedFor).format("hh:mm a, Do MMM"),
            paid: appointment.number,
            _id: appointment._id,
        }))
        console.clear();
        console.log({
          appointments
        });
        this.setState({
          todaysAppointments,
          totalAppointments,
          tatalAppData
        });
      })
      .catch(console.log);
  }
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      )
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };
  render() {
    const { todaysAppointments, totalAppointments, tatalAppData } = this.state;
    const columns = [
      {
        title: "Patient Name",
        dataIndex: "name",
        key: "name",
        width: "30%",
        ...this.getColumnSearchProps("name")
      },
      {
        title: "Appt Date",
        dataIndex: "date",
        key: "date",
        width: "20%",
        ...this.getColumnSearchProps("date")
      },
      {
        title: "Paid Amount",
        dataIndex: "paid",
        key: "paid",
        width: "15%",
        ...this.getColumnSearchProps("paid")
      },
      {
        title: "",
        dataIndex: "age",
        key: "age",
        // width: "20%",
        render: (text, record)=> {
            console.log({
                text, record
            })
            return <>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-sm btn-primary">View</button>
                <button type="button" class="btn btn-sm btn-primary">Approve</button>
                <button type="button" class="btn btn-sm btn-primary">Reject</button>
            </div>

            </>
        }
        // ...this.getColumnSearchProps("age")
      },
    ];

    return (
      <div className="p-doc-dashboard">
        <div className="container pt-5">
          <div className="p-doc-dashboard__content">
            <div className="p-doc-dashboard__top-card-wrapper mb-3">
              <div className="p-doc-dashboard__top-card">
                <p>Appointments today</p>
                <h4>{todaysAppointments.length}</h4>
              </div>
              <div className="p-doc-dashboard__top-card">
                <p>Total Appointments</p>
                <h4>{totalAppointments.length}</h4>
              </div>
              <div className="p-doc-dashboard__top-card">
                <p>Revenue</p>
                <h4>300</h4>
              </div>
            </div>
            <Table columns={columns} dataSource={tatalAppData} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedInDoctor: state.loggedInDoctor
});

export default withDashboardLayout(connect(mapStateToProps)(dashboard));
