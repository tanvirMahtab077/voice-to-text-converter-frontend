import {
	COLLAPSED_MARGIN_RIGHT,
	COLLAPSED_MERGIN_LEFT,
	HIDE_DRAWER_MERGIN_LEFT,
	NON_COLLAPSED_MERGIN_LEFT,
	NON_COLLPASED_MARGIN_RIGHT,
} from '../constants/Layout.constant';

export function setLayoutMarginLeft(collapsed, hideDrawer) {
	if (hideDrawer === true) {
		return HIDE_DRAWER_MERGIN_LEFT;
	} else {
		if (collapsed) {
			return COLLAPSED_MERGIN_LEFT;
		} else {
			return NON_COLLAPSED_MERGIN_LEFT;
		}
	}
}

export function setLayoutMarginRight(collapsed, hideDrawer) {
	if (hideDrawer === true) {
		return 10;
	} else {
		if (collapsed) {
			return COLLAPSED_MARGIN_RIGHT;
		} else {
			return NON_COLLPASED_MARGIN_RIGHT;
		}
	}
}
