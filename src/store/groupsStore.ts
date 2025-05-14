import { fetchGroupsApi } from "./api";
import { BaseFetchStore } from "./BaseFetchStore";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

class GroupsStore extends BaseFetchStore<GroupContactsDto[]> {
    constructor() {
        super()
    }

    fetchGroups = () => this.fetchData(fetchGroupsApi)
}

export const groupsStore = new GroupsStore();