const BASE_URL = 'https://front-test.dev.aviasales.ru/';

export const GET_ID = BASE_URL + 'search';

export const searchTicketsPack = (searchID) => BASE_URL + 'tickets?searchId=' + searchID;