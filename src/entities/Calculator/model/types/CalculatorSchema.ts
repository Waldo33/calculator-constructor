export interface CalculatorSchema {
    currentOperand: number;
    prevOperand?: number;
    operation?: Operators;
    overwrite: boolean;
    error?: string;
}

export type Operators = "plus" | "minus" | "multiply" | "divide" | "float"
