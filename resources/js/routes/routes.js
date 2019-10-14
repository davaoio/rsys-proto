export const routes = [
    {path: '/', component: require("../components/pages/Home").default, name: "home"},
    {path: '/login', component: require("../components/pages/Login").default, name: "login"},
    {path: '/profile', component: require("../components/pages/Profile").default, name: "profile", meta: {auth: true}},
    {path: '/signup/:client', component: require("../components/pages/Signup").default, name: "signup", props: true},
    {path: '*', component: require("../components/pages/NotFound").default, name: "notfound"},
]
