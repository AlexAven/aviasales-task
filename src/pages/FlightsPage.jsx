import Filter from '../features/filters/Filter';
import Switcher from '../features/filters/Switcher';
import TicketsList from '../features/tickets/TicketsLIst';

const FlightsPage = () => {
  return (
    <>
      <Filter />
      <Switcher buttons={['самый дешевый', 'самый быстрый', 'оптимальный']} />
      <TicketsList />
    </>
  );
};

export default FlightsPage;
