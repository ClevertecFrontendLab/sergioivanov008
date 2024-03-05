import { createSlice } from '@reduxjs/toolkit'
import { GetFeedbacksOkResponse, NewFeedbackPost, Nullable } from '../../types/types';

export type FeedbacksState = {
    feedbacks: GetFeedbacksOkResponse,
    isLoading: boolean,
    showModalFeedbacks: Nullable<string>,
    showModalNewFeedback: boolean,
    newFeedbackRating: number,
    newFeedbackMessage: string,
    newFeedbackPost: Nullable<NewFeedbackPost>,
};

const initialState: FeedbacksState = {
    feedbacks: [],
    isLoading: false,
    showModalFeedbacks: null,
    showModalNewFeedback: false,
    newFeedbackRating: 0,
    newFeedbackMessage: '',
    newFeedbackPost: null,
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
        setShowModalNewFeedback: (state, action) => {
            state.showModalNewFeedback = action.payload;
        },
        setNewFeedbackRating: (state, action) => {
            state.newFeedbackRating = action.payload;
        },
        setNewFeedbackMessage: (state, action) => {
            state.newFeedbackMessage = action.payload;
        },
        startNewFeedbackPost: (state, action) => {
            state.isLoading = true;
            state.newFeedbackPost = action.payload;
        },
        clearNewFeedbackPost: (state) => {
            state.newFeedbackPost = null;
        }
    }
});

export const { reducer: feedbacksReducer, actions: feedbacksActions } = feedbacksSlice;

