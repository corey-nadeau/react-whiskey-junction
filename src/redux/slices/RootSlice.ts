import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name:'root',
    initialState: {
        maker:'Maker',
        flavor:'Flavor',
        year:'Year',
        rating:'Rating',
    },
    reducers: {
        chooseMaker: (state, action) => { state.maker = action.payload },
        chooseFlavor: (state, action) => { state.flavor = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseRating: (state, action) => { state.rating = action.payload },
    }
})

export const reducer = rootSlice.reducer
export const { chooseMaker, chooseFlavor, chooseYear, chooseRating } = rootSlice.actions