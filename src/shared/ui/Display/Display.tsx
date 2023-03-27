import {classNames} from "shared/lib/classNames/classNames";
import {FC, HTMLAttributes} from "react";
import cls from "./Display.module.scss";

interface DisplayProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}
export const Display: FC<DisplayProps> = ({className, children}) => {

	return (
		<div className={classNames(cls.Display, {}, [className])}>
			{children}
		</div>
	);
};
