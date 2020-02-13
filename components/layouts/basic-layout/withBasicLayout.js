import Head from 'next/head'
import { PROJECT_NAME, GOOGLE_API_KEY } from '../../../constants/projectKeys'
import { mainMenus } from "../../../constants/messages/menus"
import Header from '../../header/Header'
import '../../../style/app.scss'
const withBasicLayout = (PassedComponent) => ({children, ...props }) => {
    return (
        <div className="c-layout c-layout--basic">
            <Head>
                <title>{PROJECT_NAME}</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <script src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`} async defer></script>
            <Header mainMenus={mainMenus} />
            <PassedComponent {...props} >{children}</PassedComponent>
        </div>
    )
}

export default withBasicLayout