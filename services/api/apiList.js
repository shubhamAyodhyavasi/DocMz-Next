import { BASE_URL } from '../../constants/projectKeys'

const getSpecialities       = `${BASE_URL}/doctors/get/specialties`
const getDoctorsList        = `${BASE_URL}/doctors/get`
const getDoctorById         = `${BASE_URL}/doctors/getdoc`
const getDoctorByNpi        = `${BASE_URL}/doctors/getinfo`
const doctorProfileUpdate   = `${BASE_URL}/doctors/profile/update`

const registerDoctor        = `${BASE_URL}/doctors/register`
const doctorLogin           = `${BASE_URL}/doctors/authenticate`

const registerPatient       =  `${BASE_URL}/patient/register`

const getAppointments       = `${BASE_URL}/appointment/get`

export default {
    getSpecialities,
    getDoctorsList,
    getDoctorById,
    registerDoctor,
    getDoctorByNpi,
    doctorLogin,
    doctorProfileUpdate,

    registerPatient,

    getAppointments,
}
