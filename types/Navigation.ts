export type Navigation = {
    _id: string;
    title: string;
    items: NavigationItem[];
}

export type NavigationItem = {
    _id: string;
    title: string;
    link: string;
    isDropdown: boolean;
    order: number;
    dropdownItems?: DropdownItem[];
}

export type DropdownItem = {
    _key: string;
    title: string;
    description: string;
    link: string;
}