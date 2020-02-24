import withBasicLayout from '../components/layouts/basic-layout/withBasicLayout'
import SearchBar from '../components/search/search-bar/SearchBar'
import SearchCard from '../components/search-card/SearchCard'
import { getDoctorsList } from '../services/api'
class search extends React.Component {
    constructor(){
        super()
        this.state = {
            doctors: []
        }
    }
    componentDidMount(){
        getDoctorsList()
        .then(res => {
            this.setState({
                doctors: [...res.data.data].filter(doctor => doctor.appointments && doctor.appointments.length > 0)
            })
        })
    }
    render() {
        const { doctors } = this.state
        console.log({
            doctors
        })
        return (
            <div className="c-search">
                <SearchBar />
                <br />
                <a href="whatsapp://send?phone=+917874855778&text=safdsdf">
                whatsapp
                </a>
                <br />
                <a href="https://api.whatsapp.com/send?phone=+917874855778&text=safdsdf">
                whatsapp desktop
                </a>
                <div className="container">
                    <div className="p-5"></div>
                    {
                        doctors.map((doctor, i) => <SearchCard key={i} doctor={doctor} />)
                    }
                    <div className="p-5"></div>
                </div>
            </div>
        )
    }
}

export default withBasicLayout(search)