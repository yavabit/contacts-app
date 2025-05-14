import { ContactDto } from "src/types/dto/ContactDto";
import { fetchContactsApi } from "./api";
import { BaseFetchStore } from "./BaseFetchStore";
import { flow } from "mobx";
import { favoriteStore } from "./favoriteStore";


class ContactsStore extends BaseFetchStore<ContactDto[]> {
    constructor() {
        super()
    }

    fetchContacts = flow(function* (this: ContactsStore) {
        yield this.fetchData(fetchContactsApi);

        if (this.data) {
            favoriteStore.setData(this.data)
        }
    });
}

export const contactsStore = new ContactsStore();