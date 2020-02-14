import classNames from 'classnames'

const SimpleSlideCard = ({children, icon, title, backgroundColor, cardClass}) => {
    
    return (
        <div className="c-simple-slide-card p-2 m-3">
            <div 
            style={{backgroundColor}}
            className={classNames("c-simple-slide-card__inner", {
                [cardClass]: cardClass
            })}>
                <div className="c-simple-slide-card__icon">{icon}</div>
                <h5 className="c-simple-slide-card__title pt-3">{title}</h5>
                {children}
            </div>
        </div>
    )
}
SimpleSlideCard.defaultProps = {
    backgroundColor: "transparent"
}
export default SimpleSlideCard
