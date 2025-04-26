import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/shared/components/GroupContactsCard';
import { useGetStore } from 'src/shared/hooks/useGetStore';

export const GroupListPage = () => {

  const groupContacts = useGetStore().groupContacts

  return (
    <Row xxl={4}>
      {groupContacts.map((groupContact) => (
        <Col key={groupContact.id}>
          <GroupContactsCard groupContacts={groupContact} withLink />
        </Col>
      ))}
    </Row>
  );
};
