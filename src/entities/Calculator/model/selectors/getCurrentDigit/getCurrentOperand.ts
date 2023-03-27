import {StateSchema} from "app/providers/StoreProvider";

export const getCurrentOperand = (state: StateSchema) => state.calculator.currentOperand;
