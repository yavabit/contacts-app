import { ThunkAction } from "redux-thunk";
import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { RootState } from "./store";

export const SET_CONTACTS_ACTION = 'SET_CONTACTS_ACTION';
export const SET_CONTACTS_SUCCESS_ACTION = 'SET_CONTACTS_SUCCESS_ACTION';
export const SET_GROUP_CONTACTS_ACTION = 'SET_GROUP_CONTACTS_ACTION';

export const SET_FAVORITE_ACTION = 'SET_FAVORITE_ACTION';
export const TOGGLE_FAVORITE_ACTION = 'TOGGLE_FAVORITE_ACTION';


interface SetContactsAction {
    type: typeof SET_CONTACTS_ACTION;
}
interface SetContactsSuccessAction {
    type: typeof SET_CONTACTS_SUCCESS_ACTION;
}
interface SetGroupContactsAction {
    type: typeof SET_GROUP_CONTACTS_ACTION;
    payload: GroupContactsDto[];
}
interface SetFavoriteAction {
    type: typeof SET_FAVORITE_ACTION;
    payload: FavoriteContactsDto;
}
interface ToggleFavoriteAction {
    type: typeof TOGGLE_FAVORITE_ACTION;
    payload: {
        action: 'add' | 'delete';
        data: ContactDto
    };
}

/* export function setContactsActionCreator(data: ContactDto[]): SetContactsAction {
    return { type: SET_CONTACTS_ACTION, payload: data }
} */
export function setGroupContactsActionCreator(data: GroupContactsDto[]): SetGroupContactsAction {
    return { type: SET_GROUP_CONTACTS_ACTION, payload: data }
}
export function setFavoriteActionCreator(data: FavoriteContactsDto): SetFavoriteAction {
    return { type: SET_FAVORITE_ACTION, payload: data }
}

export function setContactsActionCreator(): ThunkAction<void, RootState, void, ProjectActions> {
    return async (dispatch) => {
        dispatch({ type: SET_CONTACTS_ACTION });

        const res: {success: boolean} = await new Promise((resolve) => setTimeout(() => resolve({success: true}), 2000))

        if (res.success) {
            dispatch({ type: SET_CONTACTS_SUCCESS_ACTION });
        }
    }
}

export function toggleFavoriteActionCreator(action: 'add' | 'delete', data: ContactDto): ToggleFavoriteAction {
    return { type: TOGGLE_FAVORITE_ACTION, payload: {action, data} }
}

export type ProjectActions =
    | SetContactsAction
    | SetGroupContactsAction
    | SetFavoriteAction
    | ToggleFavoriteAction
    | SetContactsSuccessAction
