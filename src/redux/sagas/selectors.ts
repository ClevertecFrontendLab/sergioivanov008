import { RootState } from "@redux/configure-store";

export const rememberMe = (state: RootState) => state.auth.rememberMe;
