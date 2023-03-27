import {CalculatorSchema} from "entities/Calculator/model/types/CalculatorSchema";

export interface StateSchema {
    calculator: CalculatorSchema;
}

export type StateSchemaKey = keyof StateSchema;
