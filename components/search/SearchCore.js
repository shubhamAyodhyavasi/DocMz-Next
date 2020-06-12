import React, { Component } from 'react'
import { Select, DatePicker, Spin, Icon, Divider, Row, Col, Button, Steps, List } from 'antd';
import { SEARCH_BOX_HEADING } from '../../constants/messages/default'
import { getSpecialities,searchDoctors } from '../../services/api';
import AddressSearchInput from '../address-search-input/AddressSearchInput';
import MulitSearchInput from '../multi-search-input/MulitSearchInput';

class SearchCore extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            isError: false,
            speciality: [],
            popularSpeciality: [],
            selectedSpeciality: null,
            selectedDate: null,
            selectAddress:null,
        }
        this.onClick=this.onClick.bind(this);
    }
    componentDidMount(){

        getSpecialities()
        .then(res => {
            this.setState({
                speciality: res.data?.data || [],
                popularSpeciality: (res.data?.data || []).filter( speciality => speciality.popular)
            })
        })
        .catch(err => {
            console.log({err})
            this.setState({
                isError: true
            })
        })
    }
    onSpecialityChange = selectedSpeciality => this.setState({selectedSpeciality})
    onDateChange       = selectedDate       => this.setState({selectedDate})
    onAddressSelect = selectAddress => this.setState({selectAddress})


    onClick = async () =>{
       try{ 
           const city = this.state.selectAddress.split(",");
           const search ={
            speciality:this.state.selectedSpeciality,
            city:city[0],
            date:this.state.selectedDate        
        };
        console.log(search);
        
        const result = await searchDoctors(search);
        if(result){
            console.log(result);
            
        this.props.onSearch(result.data);
            }
        }catch(err){
            console.log(err);
        }
    }
    render() {
        const { Option, OptGroup } = Select;
        const {
            title
        } = this.props
        const {
            speciality,
            popularSpeciality
        } = this.state
        console.log("in search core",this.state);
        return (
            <div className="c-search-core">
                <div className="">
                    <div className="row">
                        <div className="col-md-3">
                        <Select
                            suffixIcon={<Icon type="search" />}
                            showSearch
                            placeholder="Select Specialty"
                            optionFilterProp="children"
                            onChange={this.onSpecialityChange}
                            // onSearch={onSearch}
                            className="ant-search-select w-100"

                            >
                                <OptGroup label="Popular Specialties">
                                    {
                                        popularSpeciality.map((speciality, key) => <Option key={key} value={speciality.name}>{speciality.name}</Option>)
                                    }
                                </OptGroup>
                                <OptGroup label="All Specialties">
                                    {
                                        speciality.map((speciality, key) => <Option key={key} value={speciality.name}>{speciality.name}</Option>)
                                    }
                                </OptGroup>
                            </Select>
                        </div>
                        <div className="col-md-3">
                            <AddressSearchInput className="ant-search-select" onSelect={this.onAddressSelect} />
                        </div>
                        <div className="col-md-2">
                            <DatePicker onChange={this.onDateChange} className="ant-search-select custom-ant-search-select-home-date ant-calendar-home w-100" />
                        </div>
                        <div className="col-md-4 d-flex">
                            {/* <input className="form-control" /> */}
                            <div className="w-100 pr-3">
                                <MulitSearchInput />
                            </div>
                            <div className="pl-3">
                                <button className="btn btn-primary" onClick={this.onClick}>
                                    <Icon type="right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SearchCore.defaultProps = {
    title: SEARCH_BOX_HEADING,
    
}

export default SearchCore