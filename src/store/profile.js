const { createSlice } = require('@reduxjs/toolkit');

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profile: {
            firstName: 'John',
            lastName: 'Doe',
        },
    },
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload;
        }
    }
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;