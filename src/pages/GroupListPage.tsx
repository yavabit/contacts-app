import {Col, Row} from 'react-bootstrap';
import { useGetGroupContactsQuery } from 'src/redux/groupContacts';
import {GroupContactsCard} from 'src/shared/components/GroupContactsCard';

export const GroupListPage = () => {
  const { data: groupContacts, isFetching: groupContactsFetching } = useGetGroupContactsQuery()

  if(groupContactsFetching) {
    return <div>Загрзука...</div>
  }

  return (
    <Row xxl={4}>
      {groupContacts?.map((groupContact) => (
        <Col key={groupContact.id}>
          <GroupContactsCard groupContacts={groupContact} withLink />
        </Col>
      ))}
    </Row>
  );
};
