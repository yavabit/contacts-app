import { useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactDto} from 'src/types/dto/ContactDto';
import {ContactCard} from 'src/shared/components/ContactCard';
import {Empty} from 'src/shared/components/Empty';
import { useGetStore } from 'src/shared/hooks/useGetStore';


export const ContactPage = () => {
  const {contactId} = useParams<{ contactId: string }>();
  const contactsState = useGetStore().contacts;
  const [contact, setContact] = useState<ContactDto>();

  useEffect(() => {
    setContact(() => contactsState.data.find(({id}) => id === contactId));
  }, [contactId]);

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};
