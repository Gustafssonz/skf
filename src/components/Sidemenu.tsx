import { FC } from "react";
import { List } from "@material-ui/core";
import SidemenuItem, { ISidemenuItem } from "./SidemenuItem";
import { useState } from "react";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		width: '40%',
		borderRight: '2px inset'
	},
});
export interface ISidemenuProps {
	data?: ISidemenuItem[];
}

type ItemProps = {
	setMainText: Function;
	currentMain?: string;
};

const Sidemenu: FC<ItemProps> = ({ setMainText, currentMain }) => {
	const classes = useStyles();
	const API_URL = "https://run.mocky.io/v3/624b1431-6ef2-4899-8597-a8036477da73";
	const [data, setdata] = useState<ISidemenuItem[]>();

	const loadData = async () => {
		const result: ISidemenuProps = await (await fetch(API_URL)).json();
		setdata(result.data);
	};

	useEffect(() => {
		loadData();
	}, []);

	if (data) {
		return (
			<div className={classes.root}>
				<List disablePadding dense>
					{data.map((sidebarItem, index) => (
						<SidemenuItem
							key={`${sidebarItem.name}${index}`}
							{...sidebarItem}
							setMainText={setMainText}
							currentMain={currentMain}
						/>
					))}
				</List>
			</div>
		);
	} else {
		return <div> No Data found </div>;
	}
};

export default Sidemenu;
