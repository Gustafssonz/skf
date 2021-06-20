export interface ISidemenuItem {
    name: string;
    children?: ISidemenuItem[];
    setMainText?: Function;
    active?: boolean;
    currentMain?: string,
}