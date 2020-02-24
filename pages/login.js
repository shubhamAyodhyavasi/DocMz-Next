import React, { Component } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { Form, Icon, Input, Select, Radio, DatePicker, Upload, Button, Spin } from 'antd';
import withBasicLayout from '../components/layouts/basic-layout/withBasicLayout'
import rules from '../services/validations/rules';
import Loader from '../components/loader/Loader';
import ErrorAlert from '../components/error/ErrorAlert';
import { doctorLogin } from '../services/api';

const {
    Item : FormItem
} = Form

class login extends Component {
    constructor(){
        super();
        this.state = {
            isLoading: false
        }
    }
    handleSubmit = (e)=> {
        e.preventDefault()
        const {
            form: {
                validateFields,
            }, onSubmit,
        } = this.props
        validateFields((err, values)=> {
            if (!err) {
                this.setState({
                    isLoading: true
                }, ()=> {
                    doctorLogin(values)
                    .then(({data}) => {
                        if(data.status){
                            this.setState({
                                isLoading: false
                            })
                            Router.push("/")
                        }else{
                            this.setState({
                                isLoading: false,
                                errMsg: data.message || data.error
                            })
                        }
                    }).catch(err => {
                        this.setState({
                            isLoading: false,
                            errMsg: "Something went wrong"
                        })
                    })
                })
            }
        })
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, getFieldValue } = this.props.form;
        const {
            isLoading, errMsg
        } = this.state
        return (
            <div className="p-login">
                <div className="container">
                    <div className="row p-login__full-row" style={{
                        // minHeight: "80vh"
                    }} >
                        <div className="col-xl-8 col-lg-6 p-login__left-col"
                        // style={{
                        //     backgroundImage: "url(/images/login/bg-image.png)",
                        //     backgroundSize: "contain",
                        //     backgroundPosition: "center",
                        //     backgroundRepeat: "no-repeat"
                        // }}
                        >
                            {/* <img src="" alt="" className="img-fluid"/> */}
                        </div>
                        <div className="col-xl-4 col-lg-6 d-flex align-items-center justify-content-center">
                            <div className="p-login__form-wrapper p-lg-5 p-3 bg-light">
                                <Form onSubmit={this.handleSubmit}>
                                    <div className="pb-3">
                                        <h5>Login</h5>
                                    </div>
                                    <div className="">
                                        <FormItem>
                                            {getFieldDecorator('email', {
                                                rules: [
                                                    rules.required(),
                                                    rules.email(),
                                                ],
                                            })( 
                                                <Input
                                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    placeholder="Email"
                                                />,
                                            )}
                                        </FormItem>
                                    </div>
                                    <div className="">
                                        <FormItem>
                                            {getFieldDecorator('password', {
                                                rules: [
                                                    rules.required("Please enter your password"),
                                                ],
                                            })( 
                                                <Input
                                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    placeholder="Password"
                                                    type="password"
                                                />,
                                            )}
                                        </FormItem>
                                    </div>          
                                    <Loader isLoading={isLoading} />
                                    <ErrorAlert error={errMsg} />
                                    <div className="text-center d-block">
                                        <button disabled={isLoading} className="btn btn-primary" type="submit">Login</button>
                                    </div>
                                    <hr />
                                    <div className="text-center">
                                        Don't have an account?{" "}
                                        <Link href="/register">
                                            <a>Register</a>
                                        </Link>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withBasicLayout(
    Form.create({
        name: 'login'
    })(login)
)