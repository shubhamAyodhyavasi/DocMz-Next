import { BASE_URL } from '../../constants/projectKeys'

const getSpecialities = `${BASE_URL}/doctors/get/specialties`
const getDoctorsList = `${BASE_URL}/doctors/get`
const getDoctorById = `${BASE_URL}/doctors/getdoc`
const getDoctorByNpi = `${BASE_URL}/doctors/getinfo`
const doctorProfileUpdate = `${BASE_URL}/doctors/profile/update`
const saveTimeSlots = `${BASE_URL}/doctors/saveslots`
const searchDoctors = `${BASE_URL}/doctors/search`

const registerDoctor = `${BASE_URL}/doctors/register`
const doctorLogin = `${BASE_URL}/doctors/authenticate`

const registerPatient = `${BASE_URL}/patient/register`
const patientLogin = `${BASE_URL}/patient/authenticate`
const patientCardSave = `${BASE_URL}/stripe/create/card/profile`
const patientCardStripeCharge = `${BASE_URL}/stripe/charge/card`
const patientCardTestDetails = `${BASE_URL}/stripe/testcard`
const patientCardList = `${BASE_URL}/stripe/list`

const getAppointments = `${BASE_URL}/appointment/get`
const approveAppointments = `${BASE_URL}/appointment/approve`




export default {
    getSpecialities,
    getDoctorsList,
    getDoctorById,
    registerDoctor,
    getDoctorByNpi,
    doctorLogin,
    doctorProfileUpdate,
    saveTimeSlots,
    searchDoctors,

    registerPatient,
    patientLogin,
    patientCardSave,
    patientCardStripeCharge,
    patientCardTestDetails,
    patientCardList,

    getAppointments,
    approveAppointments,

}