import { useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/shared/components/ContactCard';
import {ContactDto} from 'src/types/dto/ContactDto';
import { useGetStore } from 'src/shared/hooks/useGetStore';

export const FavoritListPage = () => {
  const {contacts, favorite} = useGetStore()

  const [contactsFiiltered, setContactsFiltered] = useState<ContactDto[]>([])
  useEffect(() => {
    setContactsFiltered(() => contacts.data.filter(({id}) => favorite.map(item => item.id).includes(id)));
  }, [contacts, favorite])

  return (
    <Row xxl={4} className="g-4">
      {contactsFiiltered.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
}
