import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import {calculatorReducer} from "entities/Calculator";

export function createReduxStore(
	initialState?: StateSchema,
) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		calculator: calculatorReducer
	};

	return configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
	});
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
