import { useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactDto} from 'src/types/dto/ContactDto';
import {GroupContactsCard} from 'src/shared/components/GroupContactsCard';
import {Empty} from 'src/shared/components/Empty';
import {ContactCard} from 'src/shared/components/ContactCard';
import { useGetStore } from 'src/shared/hooks/useGetStore';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

export const GroupPage = () => {
  const {groupId} = useParams<{ groupId: string }>();
  const {contacts, groupContacts} = useGetStore()

  const [contactsFiltered, setContactsFiltered] = useState<ContactDto[]>([]);
  const [groupContactsCard, setGroupContactsCard] = useState<GroupContactsDto>();

  useEffect(() => {
    const findGroup = groupContacts.find(({id}) => id === groupId);
    setGroupContactsCard(groupContacts.find(({id}) => id === groupId))
    setContactsFiltered(() => {
      if (findGroup) {
        return contacts.data.filter(({id}) => findGroup.contactIds.includes(id))
      }
      return [];
    });
  }, [groupId]);

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
