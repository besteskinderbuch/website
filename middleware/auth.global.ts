import { useAccountStore } from "~/stores/useAccountStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) {
    return;
  }
  const { getCurrentUser, user } = useAuth();
  console.debug("[auth-middleware] user.value: ", user.value);

  if (!user.value) {
    try {
      await getCurrentUser();
    } catch (e) {
      console.log("middleware/auth.ts: error: ", e);
    }
  }
});
