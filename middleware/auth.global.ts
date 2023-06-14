export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) {
    return;
  }
  
  const { getCurrentUser, user } = useAuth();

  if (!user.value) {
    try {
      await getCurrentUser();
    } catch (e) {
      console.log("middleware/auth.ts: error: ", e);
    }
  }
});
