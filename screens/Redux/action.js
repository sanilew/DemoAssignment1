import {
    CHANGE_INPUT_FIELD,
    POST_OUTPUT,
} from './constant';

export const changeInput = (text) => ({
    type: CHANGE_INPUT_FIELD,
    payload: text,
});

export const postOutput = (text) => ({
    type: POST_OUTPUT,
    payload: text,
});