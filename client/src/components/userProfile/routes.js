import UserProfile from "./views/UserProfile.js";


const dashboardRoutes = [  
  {
    path: "/userProfile",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/user"
  }
];

export default dashboardRoutes;
