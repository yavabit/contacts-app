import { useAppStore } from "src/redux/hooks";

export const useGetStore = () => useAppStore().getState()