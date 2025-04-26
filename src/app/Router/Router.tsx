import { Route, Routes } from "react-router-dom";
import { ContactListPage, ContactPage, FavoritListPage, GroupListPage, GroupPage } from "src/pages";
import { Layout } from "src/Layout/Layout";

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<ContactListPage />} />
				<Route path="contact">
					<Route index element={<ContactListPage />} />
					<Route path=":contactId" element={<ContactPage />} />
				</Route>
				<Route path="groups">
					<Route index element={<GroupListPage />} />
					<Route path=":groupId" element={<GroupPage />} />
				</Route>
				<Route path="favorite" element={<FavoritListPage />} />
			</Route>
		</Routes>
	);
};
