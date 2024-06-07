import { ReactNode } from "react";

export type NavbarItem = {
    title: string;
    isDropdown: boolean;
    content?: ReactNode;
    link?: string;
}