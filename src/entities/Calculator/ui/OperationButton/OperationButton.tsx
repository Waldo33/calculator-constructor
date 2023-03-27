import {FC, ReactNode} from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Button} from "shared/ui/Button/Button";
import {calculatorActions} from "../../model/slice/calculatorSlice";
import {Operators} from "entities/Calculator/model/types/CalculatorSchema";

interface OperationButtonProps {
    className?: string;
    operation: Operators;
    children?: ReactNode;
}
export const OperationButton: FC<OperationButtonProps> = ({ operation, className, children}) => {
	const dispatch = useAppDispatch();

	const onClick = () => {
		dispatch(calculatorActions.chooseOperation(operation));
	};

	return <Button className={className} onClick={onClick}>{children}</Button>;
};
