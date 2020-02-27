export const mainMenus = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About",
        link: "/"
    },
    {
        name: "Service",
        link: "/"
    },
    {
        name: "Join",
        link: "/register"
    },
    {
        name: "Login",
        link: "/login",
        extraClass: "has-btn",
        extraLinkClass: "btn btn-outline-primary",
    },
]
export const rightMenus = [
    {
        name: "login",
        link: "/"
    },
    {
        name: "Sign up",
        link: "/",
        extraClass: "",
        extraLinkClass: "btn btn-secondary",
        // subMenus: [
        //     {
        //         name: "test",
        //         link: "test"
        //     },
        //     {
        //         name: "test",
        //         link: "test"
        //     },
        //     {
        //         name: "test",
        //         link: "test"
        //     },
        //     {
        //         name: "test",
        //         link: "test",
        //     },
        // ]
    },
]

export const doctorDashboardMenu = [
    {
        name: "Dashboard",
        link: "/doctor/dashboard",
    },
    {
        name: "Appointments",
        link: "/doctor/dashboard/appointments",
    },
    {
        name: "Patients",
        link: "/doctor/dashboard/patients",
    },
    {
        name: "Payments",
        link: "/doctor/dashboard/payments",
    },
    {
        name: "Settings",
        link: "/doctor/dashboard/settings",
        subMenus: [
            {
                name: "Availablity",
                link: "/doctor/dashboard/settings/availablity",
            }
        ]
    },
    {
        name: "Logout",
        action: "logout",
    },
]
export default {
    mainMenus,
    rightMenus,
    doctorDashboardMenu
}