import Filter from '../components/Filter';
import Switcher from '../components/Switcher';
import List from '../components/List';
import Card from '../components/Card';

const TicketsPage = () => {
  return (
    <>
      <Filter />
      <Switcher buttons={['самый дешевый', 'самый быстрый', 'оптимальный']} />
      <List>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </List>
    </>
  );
};

export default TicketsPage;
