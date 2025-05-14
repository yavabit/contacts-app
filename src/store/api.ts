import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const BASE_URL = "https://fs04.gcfiles.net/fileservice/file/download/a/177331/sc/"

export const fetchContactsApi = async (): Promise<ContactDto[]> => {
    const response = await fetch(`${BASE_URL}385/h/0afc05779dcbbebd7055a1d87b8c7c6b.json`);
    return response.json();
};

export const fetchGroupsApi = async (): Promise<GroupContactsDto[]> => {
    const response = await fetch(`${BASE_URL}0/h/f1e98b0d70d16a909818b03b72415733.json`);
    return response.json();
};