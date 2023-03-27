import {FC, HTMLAttributes} from "react";
import {Card} from "shared/ui/Card/Card";
import cls from "./OperatorsItem.module.scss";
import {OperationButton} from "entities/Calculator";

interface OperatorsItemProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}
export const OperatorsItem: FC<OperatorsItemProps> = ({className, ...props}) => {

	return (
		<div className={cls.operators} {...props}>
			<OperationButton operation={"divide"}>/</OperationButton>
			<OperationButton operation={"multiply"}>x</OperationButton>
			<OperationButton operation={"minus"}>-</OperationButton>
			<OperationButton operation={"plus"}>+</OperationButton>
		</div>
	);
};
