import {classNames} from "shared/lib/classNames/classNames";
import {DragEvent, DragEventHandler, FC, ReactNode, useMemo, useState} from "react";
import cls from "./MainPage.module.scss";
import {DropZone} from "shared/ui/DropZone/DropZone";
import {Switcher} from "shared/ui/Switcher/Switcher";
import {DisplayItem} from "widgets/DisplayItem/ui/DisplayItem";
import {OperatorsItem} from "widgets/OperatorsItem/ui/OperatorsItem";
import {DigitsItem} from "widgets/DigitsItem/ui/DigitsItem";
import {EqualItem} from "widgets/EqualItem/ui/EqualItem";
import {Card} from "shared/ui/Card/Card";

interface MainPageProps {
    className?: string;
}

type CatalogItem = {
	tag: string;
	element: FC;
	block: boolean;
}
export const MainPage: FC<MainPageProps> = ({className}) => {
	const [showConstructor, setShowConstructor] = useState(true);
	const [result, setResult] = useState<CatalogItem[]>([]);
	const [catalog, setCatalog] = useState<CatalogItem[]>([
		{
			block: false,
			tag: "display",
			element: DisplayItem
		},
		{
			block: false,
			tag: "operators",
			element: OperatorsItem
		},
		{
			block: false,
			tag: "digits",
			element: DigitsItem
		},
		{
			block: false,
			tag: "equal",
			element: EqualItem
		},
	]);
	const [selectedItem, setSelectedItem] = useState<CatalogItem>();
	const [isTarget, setIsTarget] = useState(false);
	const onDragStartHandler = (e: DragEvent, item: CatalogItem) => {
		setSelectedItem(item);
	};

	const onDragEndHandler = (e: DragEvent, item: CatalogItem) => {
		if(isTarget) {
			setCatalog(catalog.map(value => value.tag === item.tag ? {...value, block: true} : value));
			setResult([...result, item]);
			setIsTarget(false);
		}
	};

	return (
		<div className={classNames(cls.MainPage, {}, [className])}>
			{
				showConstructor && (
					<div className={cls.catalog}>
						{
							catalog.map((item, index) => (
								<Card
									disable={item.block}
									key={index}
									notClickable={true}
									draggable={!item.block}
									onDragStart={(e) => onDragStartHandler(e, item)}
									onDragEnd={(e) => onDragEndHandler(e, item)}
								>
									<item.element
										data-tag={item.tag}
									/>
								</Card>
							))
						}
					</div>
				)
			}
			<div className={cls.result}>
				<Switcher onSwitch={(index) => setShowConstructor(!!index)} className={cls.switcher}/>
				{
					showConstructor && result.length === 0 &&
					<DropZone
						isDrag={isTarget}
					/>
				}
				<div
					onDragEnter={() => setIsTarget(true)}
					onDragLeave={() => setIsTarget(false)}
					onDrop={() => console.log("123")}
					className={cls.itemsGrid}
				>
					{
						result.map((item, index) => (
							<div className={classNames("", {[cls.disable]: showConstructor})} draggable key={index}>
								<item.element/>
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
};
