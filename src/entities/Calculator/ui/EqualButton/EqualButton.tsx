import {FC} from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Button} from "shared/ui/Button/Button";
import {calculatorActions} from "../../model/slice/calculatorSlice";

interface EqualButtonProps {
    className?: string;
}
export const EqualButton: FC<EqualButtonProps> = ({ className}) => {
	const dispatch = useAppDispatch();

	const onClick = () => {
		dispatch(calculatorActions.evaluate());
	};

	return (
		<Button
			className={className}
			onClick={onClick}
			big
			theme={"secondary"}
		>
            =
		</Button>
	);
};
