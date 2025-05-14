import { ContactDto } from "src/types/dto/ContactDto";
import { makeAutoObservable } from "mobx";


class FavoriteStore {
    data: ContactDto[] = [];
    loading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    setData(contacts: ContactDto[]) {
        this.data = contacts.slice(0, 4)
    }
}

export const favoriteStore = new FavoriteStore();