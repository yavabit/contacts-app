import { useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/shared/components/ContactCard';
import {ContactDto} from 'src/types/dto/ContactDto';
import { useGetContactsQuery } from 'src/redux/contacts';
import { useAppSelector } from 'src/redux/hooks';

export const FavoritListPage = () => {
  const { data: contacts, isFetching: contactsFetching } = useGetContactsQuery() 
  const favorite = useAppSelector((state) => state.favorite.data)

  const [contactsFiltered, setContactsFiltered] = useState<ContactDto[]>([])

  useEffect(() => {
    if(contacts && contacts.length) {
      setContactsFiltered(() => contacts.filter(({id}) => favorite.map(item => item.id).includes(id)));
    }
  }, [contacts, favorite])

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
