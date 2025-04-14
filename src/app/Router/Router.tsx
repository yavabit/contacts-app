import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { DATA_CONTACT, DATA_GROUP_CONTACT } from "src/shared/__data__";
import {
	ContactListPage,
	ContactPage,
	FavoritListPage,
	GroupListPage,
	GroupPage,
} from "src/pages";
import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { Layout } from "src/Layout/Layout";

export const Router = () => {
	const contactsState = useState<ContactDto[]>(DATA_CONTACT);
	const favoriteContactsState = useState<FavoriteContactsDto>([
		DATA_CONTACT[0].id,
		DATA_CONTACT[1].id,
		DATA_CONTACT[2].id,
		DATA_CONTACT[3].id,
	]);
	const groupContactsState = useState<GroupContactsDto[]>(DATA_GROUP_CONTACT);

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route
					index
					element={
						<ContactListPage
							contactsState={contactsState}
							favoriteContactsState={favoriteContactsState}
							groupContactsState={groupContactsState}
						/>
					}
				/>
				<Route path="contact">
					<Route
						index
						element={
							<ContactListPage
								contactsState={contactsState}
								favoriteContactsState={favoriteContactsState}
								groupContactsState={groupContactsState}
							/>
						}
					/>
					<Route
						path=":contactId"
						element={
							<ContactPage
								contactsState={contactsState}
								favoriteContactsState={favoriteContactsState}
								groupContactsState={groupContactsState}
							/>
						}
					/>
				</Route>
				<Route path="groups">
					<Route
						index
						element={
							<GroupListPage
								contactsState={contactsState}
								favoriteContactsState={favoriteContactsState}
								groupContactsState={groupContactsState}
							/>
						}
					/>
					<Route
						path=":groupId"
						element={
							<GroupPage
								contactsState={contactsState}
								favoriteContactsState={favoriteContactsState}
								groupContactsState={groupContactsState}
							/>
						}
					/>
				</Route>
				<Route
					path="favorit"
					element={
						<FavoritListPage
							contactsState={contactsState}
							favoriteContactsState={favoriteContactsState}
							groupContactsState={groupContactsState}
						/>
					}
				/>
			</Route>
		</Routes>
	);
};
