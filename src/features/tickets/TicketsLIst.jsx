import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from '../../components/List';
import Card from '../../components/Card';
import { getSearchId, loadTickets } from './ticketsSlice';

const TicketsList = () => {
  const dispatch = useDispatch();

  const searchId = useSelector((state) => state.tickets.searchId);
  const filteredTickets = useSelector((state) => state.tickets.filteredTickets);

  useEffect(() => {
    if (!searchId) {
      dispatch(getSearchId());
    }
    dispatch(loadTickets(searchId));
  }, [dispatch, searchId]);

  return (
    <List>
      {filteredTickets?.map((ticket, index) => (
        <Card key={index} price={ticket.price} segments={ticket.segments} />
      ))}
    </List>
  );
};

export default TicketsList;
