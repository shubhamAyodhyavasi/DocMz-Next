
import Axios from 'axios'
import apiList from './apiList'

export const registerPatient  = body => Axios.post(apiList.registerPatient, body)
