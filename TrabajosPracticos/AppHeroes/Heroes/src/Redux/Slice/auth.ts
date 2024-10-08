import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface UserDataInitial{
    user:String|null ,
    isLogged: boolean
    

}

const initialState: UserDataInitial = {user: null , isLogged: false }

const AuthUser = createSlice({
    name: "AuthUser",
    initialState,
    reducers: {

        setLogin:(state, action: PayloadAction<String>)=>{
            state.user = action.payload;
            state.isLogged = true;
        }
        ,
        setLogout:(state)=>{
            state.user = null;
            state.isLogged = false;
        }

    }

})

export const {setLogin, setLogout}= AuthUser.actions;
export default AuthUser.reducer;