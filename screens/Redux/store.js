import {createStore} from "redux"
import { getInput, getOutput } from "./reducerFunction"

export const initialStore=createStore(getInput,getOutput)