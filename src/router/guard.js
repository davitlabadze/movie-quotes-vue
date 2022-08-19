import { Router, createWebHistory } from "vue-router";
export default {
    router.beforeEach((to, from, next) => {
        //list of blocked routes
            const protectedRoutes = ['/products', '/create'];
        //the route user is trying to access is in blocked routes list
            if (protectedRoutes.includes(to.path)) {
        //redirect to route having unauhorised message page
                return next('/unauthorised');
            }
        )
        else
        {
        // otherwise allow user to access route
            return next();
        }
}