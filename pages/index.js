import withBasicLayout from '../components/layouts/basic-layout/withBasicLayout'
import BannerType1 from '../components/banners/banner-type-1/BannerType1'
import { BANNER_BTN_TEXT, BANNER_TEXT_1, BANNER_TEXT_2, BANNER_TEXT_3, BANNER_IMAGE, SEARCH_BOX_HEADING } from '../constants/messages/home'
import SearchBox from '../components/search/search-box/SearchBox'

const Home = () => (
  <div>
    <BannerType1 
      image={BANNER_IMAGE} 
      title={
        <>
          <span className="text-danger">{BANNER_TEXT_1}</span><br />
          <b className="text-dark">{BANNER_TEXT_2}</b><br />
          <span className="text-danger">{BANNER_TEXT_3}</span>
        </>
      }
      button={
        <div>
          <span className="btn-lg btn btn-primary btn-primary-shadow d-md-inline-block d-block ">{BANNER_BTN_TEXT}</span>
        </div>
      }
    />
    <div className="container mt-n5">
      <div className="row justify-content-center">
        <div className="col-12 col-xxl-10">
          <SearchBox title={SEARCH_BOX_HEADING} />
        </div>
      </div>
    </div>
  </div>
)

export default withBasicLayout(Home)
