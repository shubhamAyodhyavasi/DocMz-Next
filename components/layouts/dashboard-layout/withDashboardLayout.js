import Head from 'next/head'
import {compose} from "redux";
import { connect } from 'react-redux'
import Router from 'next/router'
import Link from 'next/link'
import { PROJECT_NAME, GOOGLE_API_KEY } from '../../../constants/projectKeys'
import '../../../style/app.scss'
import { getSpecialities, toggleDashboardCollapse } from '../../../redux/actions'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { doctorDashboardMenu } from '../../../constants/messages/menus';
import DashboardNav from '../../dashboard-nav/DashboardNav';

const { Header: AntHeader, Content, Footer: AntFooter, Sider } = Layout;
const { SubMenu } = Menu;
const withDashboardLayout = (PassedComponent) => {
    return class extends React.Component {
        static getInitialProps = async ctx => {
            // const response = await ctx.apolloClient.query({ query: ME });
            
            // console.log("@withAuth ", response);

            // if (!response || !response.data || !response.data.me) {
            //   redirect(ctx, "/");
            //   return {
            //     me: null
            //   };
            // }

            // Get component’s props
            let componentProps = {}
            if (PassedComponent.getInitialProps) {
                componentProps = await PassedComponent.getInitialProps(ctx);
            }

            return {
                ...componentProps
            };
        }
        componentDidMount(){
            this.props.getSpecialities();
            if(this.props.loggedInDoctor._id){

            }else{
                Router.push("/login")
            }
            console.clear()
            console.log({
                getInitialProps : PassedComponent.getInitialProps,
                PassedComponent,
                props: this.props
            })
        }
        
        componentDidUpdate(prevProps){
            if(prevProps.loggedInDoctor !== this.props.loggedInDoctor){
                if(!this.props.loggedInDoctor._id){
                    Router.push("/login")
                }
            }
        }
        render(){
            const {
                children,
                dashboard,
                toggleDashboardCollapse,
                ...props
            } = this.props
            if(!this.props.isPersist){
                return <div />
            }
            if(!this.props.loggedInDoctor._id){
                return <div />
            }
            return (
                <div className="c-layout c-layout--dashboard">
                    <Head>
                        <title>{PROJECT_NAME}</title>
                        <link rel="icon" href="/favicon.png" />
                    </Head>
                    <script src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`} async defer></script>
                    <Layout style={{ minHeight: '100vh' }}>
                        <Sider collapsible collapsed={dashboard.collapsed} onCollapse={toggleDashboardCollapse}>
                            <strong className="c-logo">
                                <Link href="/" >
                                    <a>
                                        <img src="/images/logo-white.png" alt={PROJECT_NAME} />
                                    </a>
                                </Link>
                            </strong>
                            <DashboardNav items={doctorDashboardMenu} />
                        </Sider>
                        <Layout>
                            <PassedComponent {...props} >{children}</PassedComponent>
                        </Layout>
                    </Layout>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    specialities: state.specialities,
    dashboard: state.dashboard,
    loggedInDoctor: state.loggedInDoctor,
})
const mapActionToProps = {
    getSpecialities,
    toggleDashboardCollapse
}
export default compose(connect(mapStateToProps, mapActionToProps), withDashboardLayout)