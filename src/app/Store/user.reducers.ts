import { createReducer, on } from "@ngrx/store";
import { addAction,removeAction } from "./user.actions";
import { AppState, appInterface } from "./app-Interface";

export const initialState:AppState = {countData: { count: 0 }};
export const cardReducer = createReducer(
    initialState,
    on(addAction, (state)=>{
        return {
            ...state,
            countData: { ...state.countData, count: state.countData.count + 1 },
          };
    } ),
    on(removeAction,  (state)=>{
        return {
            ...state,
            countData: { ...state.countData, count: state.countData.count - 1 },
          };
    } )
)