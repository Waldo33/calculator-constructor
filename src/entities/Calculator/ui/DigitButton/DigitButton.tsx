import {FC} from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Button} from "shared/ui/Button/Button";
import {calculatorActions} from "../../model/slice/calculatorSlice";

interface DigitButtonProps {
    className?: string;
    digit: number;
}
export const DigitButton: FC<DigitButtonProps> = ({ digit, className}) => {
	const dispatch = useAppDispatch();

	const onClick = () => {
		dispatch(calculatorActions.addDigit(digit));
	};

	return <Button className={className} onClick={onClick}>{digit}</Button>;
};
