import parse from 'html-react-parser';
import Link from 'next/link'
import AppointmentCard from "../AppointmentCard/AppointmentCard"
import { getName, getAddress, getTaxonomy } from '../../services/extra/DoctorHelpers';

const SearchCard = ({doctor, dates, onlyDates, showControl, onDateChange}) => {
    console.log({
        doctor
    })
    return (
        <div className="c-search-card card">
            <div className="c-search-card__inner">
                <div className="c-search-card__image-wrapper">
                    {!onlyDates && <img src="//via.placeholder.com/200x200" className="c-search-card__img" />}
                </div>
                <div className="c-search-card__intro-wrapper">
                    {!onlyDates && <>
                        <p className="c-search-card__designation">{getTaxonomy(doctor)}</p>
                        <Link href={`/doctors/${doctor._id}`}>
                            <a className="c-search-card__name h5">{parse(getName(doctor))}</a>
                        </Link>
                        <address className="c-search-card__address">{getAddress(doctor)}</address>
                    </>}
                </div>
                <div className="c-search-card__appointment-wrapper">
                    <AppointmentCard dates={dates} onDateChange={onDateChange} showControl={showControl} onlyDates={onlyDates} doctor={doctor} />
                </div>
            </div>
        </div>
    )
}

export default SearchCard