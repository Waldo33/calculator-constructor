import {classNames} from "shared/lib/classNames/classNames";
import {FC, HTMLAttributes, useState} from "react";
import cls from "./DropZone.module.scss";
import Image from "shared/assets/icons/image.svg";

interface DropZoneProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
	isDrag: boolean;
}
export const DropZone: FC<DropZoneProps> = ({className, isDrag, ...props}) => {

	return (
		<div
			className={classNames(cls.DropZone, {[cls.isDrag]: isDrag}, [className])} {...props}
		>
			<img src={Image} className={cls.image} alt=""/>
			<p className={cls.title}>Перетащите сюда</p>
			<p className={cls.text}>
				любой элемент из левой панели
			</p>
		</div>
	);
};
