import {ButtonHTMLAttributes, FC} from "react";
import { classNames } from "../../lib/classNames/classNames";
import cls from "./Button.module.scss";

type ButtonTheme = "primary" | "secondary"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
	theme?: ButtonTheme;
	big?: boolean;
}
export const Button: FC<ButtonProps> = (props) => {
	const {className, theme = "primary",  children, big = false, ...otherProps} = props;

	return (
		<button className={classNames(cls.Button, {[cls.big]: big}, [className, cls[theme]])} {...otherProps}>
			{children}
		</button>
	);
};
