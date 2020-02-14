import classNames from 'classnames'
import Link from 'next/link'
const Nav = ({items, isSubNav}) =>{
    return (
        <ul className={classNames("c-nav row align-items-center my-auto px-3", {
            "c-nav--sub-nav": isSubNav
        })}>
            {
                items.map((navItem, index)=> {
                    const {
                        extraClass, extraLinkClass, link, name
                    } = navItem
                    return (
                        <li key={index} className={classNames("c-nav__item d-block", {
                            [extraClass]: extraClass,
                            "c-nav__item--has-submenu": navItem.subMenus && navItem.subMenus.length > 0
                        })}>
                            <Link href={link}>
                                <a className={classNames("c-nav__link", {
                                    [extraLinkClass]: extraLinkClass
                                })}>{name}</a>
                            </Link>
                            {
                                navItem.subMenus &&  <Nav isSubNav={true} items={navItem.subMenus} />
                            }
                        </li> 
                    )
                })
            }
        </ul>
    )
}
Nav.defaultProps = {
    items: [],
    isSubNav: false
}
export default Nav