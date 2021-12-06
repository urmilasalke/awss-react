"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAdmissionGrades = exports.AdmissionReducer = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    value: []
};
exports.AdmissionReducer = (0, toolkit_1.createSlice)({
    name: "admission",
    initialState,
    reducers: {
        setAdmissionGrades: (state, action) => {
            state.value = action.payload;
        }
    }
});
exports.setAdmissionGrades = exports.AdmissionReducer.actions.setAdmissionGrades;
exports.default = exports.AdmissionReducer.reducer;
