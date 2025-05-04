import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/shared/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/shared/components/FilterForm";
import { ContactDto } from "src/types/dto/ContactDto";
import { useEffect, useState } from "react";
import { useGetContactsQuery } from "src/redux/contacts";
import { useGetGroupContactsQuery } from "src/redux/groupContacts";

export const ContactListPage = () => {
	const { data: contacts, isFetching: contactsFetching } = useGetContactsQuery() 
	const { data: groupContacts, isFetching: groupContactsFetching } = useGetGroupContactsQuery()

	const [contactsFiltered, setContactsFiltered] = useState(contacts ?? [])

	const onSubmit = (fv: Partial<FilterFormValues>) => {
		let findContacts: ContactDto[] = contacts ?? [];

		if (fv.name) {
			const fvName = fv.name.toLowerCase();
			findContacts = findContacts.filter(
				({ name }) => name.toLowerCase().indexOf(fvName) > -1
			);
		}

		if (fv.groupId) {
			const groupContact = groupContacts?.find(({ id }) => id === fv.groupId);

			if (groupContact) {
				findContacts = findContacts.filter(({ id }) =>
					groupContact.contactIds.includes(id)
				);
			}
		}

		setContactsFiltered(findContacts);
	};

	useEffect(() => {
		if(contacts && contacts.length > 0) {
			setContactsFiltered(contacts)
		}
	}, [contacts])

	if(contactsFetching || groupContactsFetching) {
		return <div>Загрузка...</div>
	}

	return (
		<Row xxl={1}>
			<Col className="mb-3">
				<FilterForm
					initialValues={{}}
					onSubmit={onSubmit}
				/>
			</Col>
			<Col>
				<Row xxl={4} className="g-4">
					{contactsFiltered.map((contact) => (
						<Col key={contact.id}>
							<ContactCard contact={contact} withLink />
						</Col>
					))}
				</Row>
			</Col>
		</Row>
	);
};
