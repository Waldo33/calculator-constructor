import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CalculatorSchema, Operators} from "../types/CalculatorSchema";

const initialState: CalculatorSchema = {
	currentOperand: 0,
	prevOperand: undefined,
	operation: undefined,
	overwrite: false,
	error: undefined
};

export const calculatorSlice = createSlice({
	name: "calculator",
	initialState,
	reducers: {
		addDigit: (state, action: PayloadAction<number>) => {
			if(state.error) {
				state.error = undefined;
				state.operation = undefined;
			}
			if(state.operation && state.currentOperand) {
				if(state.operation === "float") {
					console.log("Hello");
				} else {
					state.prevOperand = state.currentOperand;
					state.currentOperand = 0;
				}
			}
			state.currentOperand = Number(String(state.currentOperand) + action.payload);
		},
		chooseOperation: (state, action: PayloadAction<Operators>) => {
			if(state.operation && state.prevOperand) {
				switch (state.operation) {
				case "divide": {
					if(state.currentOperand === 0) {
						state.prevOperand = undefined;
						state.operation = undefined;
						state.error = "Ошибка!";
						break;
					}
					state.currentOperand = state.prevOperand / state.currentOperand;
					break;
				}
				case "multiply": {
					state.currentOperand = state.prevOperand * state.currentOperand;
					break;
				}
				case "plus": {
					state.currentOperand = state.prevOperand + state.currentOperand;
					break;
				}
				case "minus": {
					state.currentOperand = state.prevOperand - state.currentOperand;
					break;
				}
				}
			}
			state.operation = action.payload;
		},
		clear: (state) => {
			state.currentOperand = 0;
			state.prevOperand = undefined;
			state.error = undefined;
			state.operation = undefined;
		},
		toFloat: (state) => {

		},
		evaluate: (state) => {
			if(state.operation && state.prevOperand) {
				switch (state.operation) {
				case "divide": {
					if(state.currentOperand === 0) {
						state.prevOperand = undefined;
						state.operation = undefined;
						state.error = "Ошибка!";
						break;
					}
					state.currentOperand = state.prevOperand / state.currentOperand;
					break;
				}
				case "multiply": {
					state.currentOperand = state.prevOperand * state.currentOperand;
					break;
				}
				case "plus": {
					state.currentOperand = state.prevOperand + state.currentOperand;
					break;
				}
				case "minus": {
					state.currentOperand = state.prevOperand - state.currentOperand;
					break;
				}
				case "float": {
					console.log("Hello");
				}
				}
			}
			state.operation = undefined;
			state.prevOperand = undefined;
		}
	},
});

export const { actions: calculatorActions, reducer: calculatorReducer } = calculatorSlice;
