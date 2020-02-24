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

export default {
    mainMenus,
    rightMenus
}