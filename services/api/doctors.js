
import Axios from 'axios'
import apiList from './apiList'

export const getSpecialities = () => Axios.get(apiList.getSpecialities)
