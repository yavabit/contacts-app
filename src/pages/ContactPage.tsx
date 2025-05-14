import { useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactDto} from 'src/types/dto/ContactDto';
import {ContactCard} from 'src/shared/components/ContactCard';
import {Empty} from 'src/shared/components/Empty';
import { contactsStore } from 'src/store/contactsStore';

export const ContactPage = () => {
  const {contactId} = useParams<{ contactId: string }>();
  const { data: contactsState, loading: contactsFetching } = contactsStore 

  const [contact, setContact] = useState<ContactDto>();

  useEffect(() => {
    if(contactsState && contactsState?.length > 0) {
      setContact(() => contactsState?.find(({id}) => id === contactId));
    }
  }, [contactId]);

  useEffect(() => {
    contactsStore.data === null && contactsStore.fetchContacts()
  }, [])

  if(contactsFetching) {
    return <div>Загрузка...</div>
  }

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};
