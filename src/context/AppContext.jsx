import { createContext, useReducer, useState, useEffect } from "react";
import { getUsersData } from "../utils/api";
import { funSuccessUsers } from "./actionCreators";
import { reducer } from "./reducer";

export const AppContext = createContext();
const initalState = {
    loading: false,
    error: false,
    data: [],
    pageData: []
};
export function AppContextProvider({ children }) {
    const [ids, setIds] = useState([]);
    const [selectAll, setSelectAll] = useState([]);
    const [state, dispatch] = useReducer(reducer, initalState);
    //-----This function will delete single row-----
    const deleteSingleRow = (id) => {
        let filtered = state.data.filter((el) => el.id !== id);
        dispatch(funSuccessUsers(filtered));
    };
    //-----This function will delete multiple rows-----
    const deleteMultiPleRow = () => {
        let filtered = state.data;
        let deleteIds = ids;
        if (selectAll.length) {
            let arr = [];
            selectAll.map((el) => arr.push(el.id));
            deleteIds = arr;
        };
        for (let i = 0; i < deleteIds.length; i++) {
            let index = filtered?.findIndex((el) => {
                return el.id == deleteIds[i];
            });
            if (index == -1) {
                continue;
            };
            filtered.splice(index, 1);
            setIds([]);
        }
        dispatch(funSuccessUsers(filtered));
        setSelectAll([]);
    }

    const value = { state, dispatch, deleteSingleRow, deleteMultiPleRow, setIds, ids, setSelectAll, selectAll };
    return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    )

}