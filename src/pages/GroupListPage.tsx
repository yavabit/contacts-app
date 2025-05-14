import { useEffect } from 'react';
import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/shared/components/GroupContactsCard';
import { groupsStore } from 'src/store/groupsStore';

export const GroupListPage = () => {
  const { data: groupContacts, loading: groupContactsFetching } = groupsStore

  useEffect(() => {
		groupsStore.data === null && groupsStore.fetchGroups()
	}, [])

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
