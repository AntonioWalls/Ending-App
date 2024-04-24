import { configureStore } from "@reduxjs/toolkit";
import { listUserReducer } from "../Reducer/reducerUser";

export default configureStore({
    reducer:{
        listUsers: listUserReducer
    },
    middleware: (getDefultMiddleware) => getDefultMiddleware({ serializableCheck: false})
});