import { FC } from "react";
import { ListItem, ListItemText, List } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
	active: {
		borderRight: "3px solid",
	},
	text: {
		"& >span": {
			display: "flex",
			alignItems: "center",
		},
	},
	iconNormal: {
		transform: "rotate(180deg)",
		transition: "transform 0.3s",
	},
	iconRotate: {
		transition: "transform 0.3s",
	},
	indent: {
		paddingLeft: "1rem",
	},
});

export interface ISidemenuItem {
	name: string;
	children?: ISidemenuItem[];
	setMainText?: Function;
	active?: boolean;
	currentMain?: string,
}

const SidemenuItem: FC<ISidemenuItem> = ({
	name,
	children,
	setMainText,
	currentMain,
}: ISidemenuItem) => {
	const [isActive, setisActive] = useState(true);
	const classes = useStyles();

	const handleClick = () => {
		setisActive(!isActive);
		if (setMainText) {
			setMainText(name);
		}
	};

	return (
		<>
			<ListItem
				className={currentMain === name ? classes.active : ""}
				button
				dense
				onClick={handleClick}
			>
				<ListItemText className={classes.text}>
					{children &&
						(isActive ? (
							<ExpandMoreIcon className={classes.iconRotate} />
						) : (
							<ExpandMoreIcon className={classes.iconNormal} />
						))}
					<span>{name}</span>
				</ListItemText>
			</ListItem>

			{Array.isArray(children) && !isActive ? (
				<List disablePadding dense>
					{children.map((child, index) => (
						<div className={classes.indent} key={index}>
							<SidemenuItem
								{...child}
								setMainText={setMainText}
								currentMain={currentMain}
							/>
						</div>
					))}
				</List>
			) : null}
		</>
	);
};

export default SidemenuItem;
