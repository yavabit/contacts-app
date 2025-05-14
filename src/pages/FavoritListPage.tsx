import { useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/shared/components/ContactCard';
import {ContactDto} from 'src/types/dto/ContactDto';
import { contactsStore } from 'src/store/contactsStore';
import { favoriteStore } from 'src/store/favoriteStore';

export const FavoritListPage = () => {
  const { data: contacts, loading: contactsFetching } = contactsStore
  const {data: favorite} = favoriteStore

  const [contactsFiltered, setContactsFiltered] = useState<ContactDto[]>([])

  useEffect(() => {
    if(contacts && contacts.length) {
      setContactsFiltered(() => contacts.filter(({id}) => favorite.map(item => item.id).includes(id)));
    }
  }, [contacts, favorite])

  useEffect(() => {
		contactsStore.data === null && contactsStore.fetchContacts()
	}, [])

  if(contactsFetching) {
    return <div>Загрузка...</div>
  }

  return (
    <Row xxl={4} className="g-4">
      {contactsFiltered.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
}
