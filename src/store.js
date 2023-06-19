import { reactive } from Vue;

export const store = reactive({
    searchText: "",
    loading: true,
});