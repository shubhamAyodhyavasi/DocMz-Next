import React ,{Component} from "react";
import withDashboardLayout from "../../../components/layouts/dashboard-layout/withDashboardLayout";
import SideNav from "../../../components/SideNav/SideNav";
import MyAppoinments from "../../../components/MyAppoinments/MyAppoinments";
import  Search from "../../../components/assets/search.js";
import  Cross  from "../../../components/assets/redCross";
import   Home  from "../../../components/assets/home";
import  Settings from "../../../components/assets/settings";
import  Question  from "../../../components/assets/question";
import  Heart1  from "../../../components/assets/heart2";
import  Mail  from "../../../components/assets/mail";
import  Clocksvg  from "../../../components/assets/clock";
import ProfileInfo from "../../../components/ProfileInfo/ProfileInfo";
import Payments from "../../../components/Payments/Payments";
import { Container, Row, Col } from "react-bootstrap";
import Clock from "react-live-clock";
import Graphs from "../../../components/Graphs/Graphs";
import Analyzes from "../../../components/Analyzes/Analyzes";
import Calendar from "../../../components/CalendarSlider/Calendar";

import classNames from 'classnames'
import { connect } from "react-redux";
import moment from "moment";

import { getDoctorById, approveAppointments } from "../../../services/api";



 class NewDash extends Component {
  constructor() {
    super();
    this.state = {
      todaysAppointments: [],
      totalAppointments: [],
      showAppointment: "today",
      isLoading: false
    };
  }
  componentDidMount() {
    const { loggedInDoctor } = this.props;
    getDoctorById(loggedInDoctor._id)
      .then(({ data }) => {
          console.log({text:"appointment",data});
          const todaysAppointments = data.data?.appointments.filter(
            appointment => appointment.booked
          );
          console.log({text:"appointment 4",todaysAppointments});
       /* const appointments = data.data?.appointments.filter(
          appointment => appointment.booked
        );

        console.log({text:"appointment 4",appointments});
       
        
        const todaysAppointments = appointments.filter(appointment =>
          moment(appointment.bookedFor).isSame(moment(),"day")
        );*/
        const totalAppointments = todaysAppointments.filter(
          appointment =>
            !moment(appointment.bookedFor).isBefore(moment(), "day")
        );
        const totalAppData = totalAppointments.map(this.parseAppointment)
        const todayAppData = todaysAppointments.map(this.parseAppointment)
        this.setState({
          todaysAppointments,
          totalAppointments,
          totalAppData,
          todayAppData
        });
      })
      .catch(console.log);
  }
  parseAppointment = (appointment, key) => ({
    appointment,
    key,
    name: appointment.patient?.email,
    date: moment(appointment.bookedFor).format("hh:mm a, Do MMM"),
    paid: appointment.number,
    _id: appointment._id,
  });
  render() {
    const { todaysAppointments, totalAppointments, totalAppData, todayAppData, showAppointment } = this.state;
    const {loggedInDoctor}=this.props;
    const {name,name_prefix}= this.props.loggedInDoctor.basic;
    console.log({test:"line 66 newdash indexjs",totalAppointments,todaysAppointments});
  return (
     <>
       
        <div className="maincontent-wrapper fimain-content-wrapper">
          <section className="dashboard-info-section">
            <Container fluid>
              <Row>
                <Col sm={8} className="p-0 fidashboard-metrics-container">
                  {/* search wrapper style classes reused from dashboard page styles file */}
                  {/* search and time section starts here  */}
                  <section className="searchbar-wrapper">
                    <div className="searchbar-container">
                       {<Search />} 

                      <div className="searchbar-input ml-sm-3">
                        <input
                          type="text"
                          placeholder="Search for symptoms.."
                        />
                      </div>
                    </div>
                    {/*  brand logo for mobile deivces visible only on mobile deivices  */}
                    <div className="brand-sm-wrapper">
                      <div className="brand-sm-icon">
                        { <Cross />} 
                      </div>
                      <div className="brand-sm-info">Medi</div>
                    </div>
                    {/* //ends here */}
                    <div className="dashboard-datetime-wrapper">
                      <span className="clock-icon">
                         {<Clocksvg />}
                      </span>
                      <Clock
                        format={"h:mm:ss A,dddd, MMMM Mo, YYYY"}
                        ticking={true}
                      />{" "}
                    </div>
                  </section>
                  {/* Search section ends here  */}
                  {/* Dashboard page metrics  wrapper starts here */}
                  <div className="fd-info-container px-5 py-4 mx-3">
                    <Graphs />
                    <div className="dashboard-secondary-title">
                      My Appoinments
                    </div>
                    <MyAppoinments appoinments={totalAppointments} />
                  </div>
                </Col>
                <Col sm={4} className="dashboard-info-container px-5">
                  <ProfileInfo name={name} name_prefix={name_prefix} />
                  <Analyzes />
                  <div className="dashboard-secondary-title mt-5">
                    This month's treatment calendar
                  </div>
                  <div
                    style={{
                      background: "white",
                      borderRadius: "1em",
                      paddingBottom: "20px"
                    }}
                  >
                    <Calendar />
                  </div>
                  <div className="dashboard-secondary-title mt-5">Payments</div>
                  <Payments />
                </Col>
              </Row>
            </Container>
          </section>
        </div>

        {/* //visible only on mobile deivices */}
        <div className="sidenav-sm-container">
          <div style={{ width: "30px", height: "30px" }}>
             {<Home />} 
          </div>
          <div style={{ width: "30px", height: "30px" }}>
             {<Settings />} 
          </div>
          <div style={{ width: "30px", height: "30px" }}>
             {<Question />} 
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            { <Heart1 />} 
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            { <Mail />} 
          </div>
        </div>
        {/* //ends here */}
     </>
  );
}
};

const mapStateToProps = state => ({
  loggedInDoctor: state.loggedInDoctor
});

export default withDashboardLayout(connect(mapStateToProps)(NewDash));
