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
        name: "service",
        link: "/"
    },
    {
        name: "login",
        link: "/",
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
        extraLinkClass: "btn btn-light",
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