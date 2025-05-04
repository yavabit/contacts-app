import { useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactDto} from 'src/types/dto/ContactDto';
import {GroupContactsCard} from 'src/shared/components/GroupContactsCard';
import {Empty} from 'src/shared/components/Empty';
import {ContactCard} from 'src/shared/components/ContactCard';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';
import { useGetGroupContactsQuery } from 'src/redux/groupContacts';
import { useGetContactsQuery } from 'src/redux/contacts';

export const GroupPage = () => {
  const {groupId} = useParams<{ groupId: string }>();

  const { data: contacts, isFetching: contactsFetching } = useGetContactsQuery() 
  const { data: groupContacts, isFetching: groupContactsFetching } = useGetGroupContactsQuery()

  const loading = contactsFetching || groupContactsFetching;

  const [contactsFiltered, setContactsFiltered] = useState<ContactDto[]>([]);
  const [groupContactsCard, setGroupContactsCard] = useState<GroupContactsDto>();

  useEffect(() => {
    if(groupContacts && contacts) {
      const findGroup = groupContacts.find(({id}) => id === groupId);
      setGroupContactsCard(groupContacts.find(({id}) => id === groupId))
      setContactsFiltered(() => {
        if (findGroup && findGroup.contactIds) {
          return contacts.filter(({id}) => findGroup.contactIds.includes(id))
        }
        return [];
      });
    }
  }, [groupId]);

  if(loading) {
    return <div>Загрузка...</div>
  }
  console.log(groupContacts);
  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                {groupContactsCard && <GroupContactsCard groupContacts={groupContactsCard} />}
              </Col>
            </Row>
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
        </>
      ) : <Empty />}
    </Row>
  );
};
