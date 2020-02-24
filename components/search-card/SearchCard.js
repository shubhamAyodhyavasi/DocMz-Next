import AppointmentCard from "../AppointmentCard/AppointmentCard"

const SearchCard = ({doctor}) => {
    return (
        <div className="c-search-card card">
            <div className="c-search-card__inner">
                <div className="c-search-card__image-wrapper">
                    <img src="//via.placeholder.com/200x200" className="c-search-card__img" />
                </div>
                <div className="c-search-card__intro-wrapper">
                    <p className="c-search-card__designation">Primary Care Doctor</p>
                    <h5 className="c-search-card__name">Dr. Erric Wood</h5>
                    <address className="c-search-card__address">142, 45, address</address>
                </div>
                <div className="c-search-card__appointment-wrapper">
                    <AppointmentCard doctor={doctor} />
                </div>
            </div>
        </div>
    )
}

export default SearchCard