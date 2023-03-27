import {FC} from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Button} from "shared/ui/Button/Button";
import {calculatorActions} from "../../model/slice/calculatorSlice";

interface FloatButtonProps {
    className?: string;
}
export const FloatButton: FC<FloatButtonProps> = ({ className}) => {
	const dispatch = useAppDispatch();

	const onClick = () => {
		dispatch(calculatorActions.toFloat());
	};

	return (
		<Button
			className={className}
			onClick={onClick}
		>
            ,
		</Button>
	);
};
