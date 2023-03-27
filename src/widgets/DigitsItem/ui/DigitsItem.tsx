import {FC, HTMLAttributes} from "react";
import cls from "./DigitsItem.module.scss";
import {Card} from "shared/ui/Card/Card";
import {DigitButton, FloatButton} from "entities/Calculator";

interface DigitsItemProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}
export const DigitsItem: FC<DigitsItemProps> = ({className, ...props}) => {

	return (
		<div className={cls.numbersPad} {...props}>
			<DigitButton digit={7}/>
			<DigitButton digit={8}/>
			<DigitButton digit={9}/>
			<DigitButton digit={4}/>
			<DigitButton digit={5}/>
			<DigitButton digit={6}/>
			<DigitButton digit={3}/>
			<DigitButton digit={2}/>
			<DigitButton digit={1}/>
			<DigitButton className={cls.big} digit={0}/>
			<FloatButton/>
		</div>
	);
};
