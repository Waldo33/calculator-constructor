import {FC, HTMLAttributes} from "react";
import {Card} from "shared/ui/Card/Card";
import {Display} from "shared/ui/Display/Display";
import {useSelector} from "react-redux";
import {getCurrentOperand, getError} from "entities/Calculator";

interface DisplayItemProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}
export const DisplayItem: FC<DisplayItemProps> = (
	{className, ...props}
) => {
	const currentOperand = useSelector(getCurrentOperand);
	const error = useSelector(getError);

	return (
		<div {...props}>
			<Display>{error || currentOperand}</Display>
		</div>
	);
};
