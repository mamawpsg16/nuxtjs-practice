// middleware/is-login.ts
export default defineNuxtRouteMiddleware((to, from) => {
  function isAuthenticated(): boolean { 
    return true; // Replace this with your actual authentication logic
  }

  // Prevent redirection if already on the home route
  if (!isAuthenticated() && to.path !== '/') {
    return navigateTo('/');
  }
});
