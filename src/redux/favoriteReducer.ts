import { FAVORITE_CONTACTS } from 'src/shared/__data__'
import { ProjectActions, SET_FAVORITE_ACTION, TOGGLE_FAVORITE_ACTION } from './actions'

export function favoriteReducer(state = FAVORITE_CONTACTS, action: ProjectActions) {
    switch (action.type) {
        case SET_FAVORITE_ACTION:
            return state

        case TOGGLE_FAVORITE_ACTION: {
            if (action.payload.action === "add") {
                return [...state, action.payload.data]
            } else if (action.payload.action === "delete") {
                return state.filter(item => item.id !== action.payload.data.id)
            } else {
                return state
            }
        }

        default:
            break;
    }

    return state;
}
