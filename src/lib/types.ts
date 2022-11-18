
export type LayoutData = {
    display_vertical_layout: boolean;
    display_collapsed_layout: boolean;
    gap_layout: number;
    padding_left_right_layout: number;
    padding_top_bottom_layout: number;
}

export type ColorData = {
    display_vertical_color: boolean;
    display_collapsed_color: boolean;
    gap_color: number;
    padding_left_right_color: number;
    padding_top_bottom_color: number;
}

export type FontData = {
    is_bold: boolean;
    is_italic: boolean;
    is_underlined: boolean;
    text_color_is_selected: boolean;
}

export type ContainerData = {
    radius: number;
    padding_left_right_container: number;
    padding_top_bottom_container: number;
    radius_top_left: number;
    radius_top_right: number;
    radius_bottom_left: number;
    radius_bottom_right: number;
}

export type TabData = {
    display_selected: boolean;
}