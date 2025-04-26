import { DATA_CONTACT } from 'src/shared/__data__'
import { ProjectActions, SET_CONTACTS_ACTION, SET_CONTACTS_SUCCESS_ACTION } from './actions'
import { ContactDto } from 'src/types/dto/ContactDto';

type initContactReducerType = {
    loading: boolean;
    data: ContactDto[];
}

const initialState: initContactReducerType = {
    loading: false,
    data: [],
}

export function contactsReducer(state = initialState, action: ProjectActions) {
    switch (action.type) {
        case SET_CONTACTS_ACTION:
            return {
                loading: true,
                data: [],
            }

        case SET_CONTACTS_SUCCESS_ACTION:
            return {
                loading: false,
                data: DATA_CONTACT,
            }

        default:
            return state;
    }

}
