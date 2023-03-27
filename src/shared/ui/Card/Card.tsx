import {classNames} from "shared/lib/classNames/classNames";
import {FC, HTMLAttributes} from "react";
import cls from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
	notClickable?: boolean;
	invisible?: boolean;
	disable?: boolean;
}
export const Card: FC<CardProps> = (
	{className, notClickable = true , children, invisible= false, disable = false, ...props}
) => {

	return (
		<div className={classNames(cls.Card, {[cls.invisible]: invisible, [cls.disable]: disable}, [])} {...props}>
			<div className={classNames("", {[cls.notClickable]: notClickable}, [className])}>
				{children}
			</div>
		</div>
	);
};
