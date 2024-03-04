import { IS_REMEMBERED } from '@constants/constants';
import { createSlice } from '@reduxjs/toolkit'
import { GetFeedbacksOkResponse, Nullable } from '../../types/types';

if (!localStorage.getItem(IS_REMEMBERED)) {
    localStorage.setItem(IS_REMEMBERED, JSON.stringify(true));
}

export type FeedbacksState = {
    feedbacks: GetFeedbacksOkResponse,
    isLoading: boolean,
    showModalFeedbacks: Nullable<string>,
};

const initialState: FeedbacksState = {
    feedbacks: [],
    isLoading: false,
    showModalFeedbacks: null,
};

export const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {
        getFeedbacksFetch: (state) => {
            state.isLoading = true;
        },
        getFeedbacksSuccess: (state, action) => {
            state.isLoading = false;
            state.feedbacks = action.payload;
        },
        setShowModalFeedbacks: (state, action) => {
            state.isLoading = false;
            state.showModalFeedbacks = action.payload;
        },
    }
});

export const { reducer: feedbacksReducer, actions: feedbacksActions } = feedbacksSlice;

