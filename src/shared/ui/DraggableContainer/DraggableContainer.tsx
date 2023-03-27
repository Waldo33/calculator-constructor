import {classNames} from "shared/lib/classNames/classNames";
import {FC, HTMLAttributes, useState} from "react";
import cls from "./DraggableContainer.module.scss";
import {useSpring, animated} from "@react-spring/web";
import {useDrag} from "@use-gesture/react";

interface DraggableContainerProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
	draggable?: boolean;
}
export const DraggableContainer: FC<DraggableContainerProps> = (
	{className, children, draggable = true}
) => {
	const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

	// Set the drag hook and define component movement based on gesture data
	const bind = useDrag(({ down, movement: [mx, my] }) => {
		if(draggable) {
			api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
		}
	});

	return (
		<animated.div
			className={classNames(cls.DraggableContainer, {[cls.active]: draggable}, [className])} {...bind()}
			style={{ x, y }}
		>
			{children}
		</animated.div>
	);
};
