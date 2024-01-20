

import {
    CHANGE_INPUT_FIELD,
    POST_OUTPUT,
} from './constant';

const initialStateInput = {
    input: '',
};

const initialStateOutput = {
    output: '',
};

export const getInput = (
    state = initialStateInput,
    action = {}
) => {
    switch (action.type) {
        case CHANGE_INPUT_FIELD:
            return Object.assign({}, state, {
                input: action.payload,
            });
        default:
            return state;
    }
};

export const getOutput = (
    state = initialStateOutput,
    action = {}
) => {
    switch (action.type) {
        case POST_OUTPUT:
            return Object.assign({}, state, {
                output: action.payload,
            });
        default:
            return state;
    }
};