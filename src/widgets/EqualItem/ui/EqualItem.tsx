import {FC, HTMLAttributes} from "react";
import {Card} from "shared/ui/Card/Card";
import {EqualButton} from "entities/Calculator";

interface EqualItemProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}
export const EqualItem: FC<EqualItemProps> = ({className, ...props}) => {

	return (
		<div {...props}>
			<EqualButton/>
		</div>
	);
};
