import { DATA_GROUP_CONTACT } from 'src/shared/__data__';
import { ProjectActions, SET_GROUP_CONTACTS_ACTION } from './actions'

export function groupContactsReducer(state = DATA_GROUP_CONTACT, action: ProjectActions) {
    switch (action.type) {
        case SET_GROUP_CONTACTS_ACTION:
            return action.payload

        default:
            break;
    }

    return state;
}
