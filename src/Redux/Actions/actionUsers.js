import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("../../componentes/Usuario.json",
async({rejectWithValue}) => {
        try{
            const resp = await axios.get('../../componentes/Usuario.json')
            return resp.data
        }catch(error)
        {
            return rejectWithValue('Error:,${error.message}');
        }
    }
);