import { faker } from '@faker-js/faker';

let username = () => faker.person.fullName();
let img = () => faker.image.avatarLegacy();
let msg = () => faker.lorem.word({ length: { min: 0, max: 100 } });
let date = () => faker.date.soon({ refDate: '2023-01-01T00:00:00.000Z' });
function getRandomInt(min = 1, max = 10): number {
  // Math.floor làm tròn xuống để đảm bảo là số nguyên
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const chatList = [
  {
    username: 'Valwood Pkwy',
    profileImg: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    lastMessage: 'Exercitationem et at qui quasi quibusdam',
    unread: 9,
    createdAt: '2023-10-15T18:05:00Z',
  },
  {
    username: 'Isla',
    profileImg: 'https://randomuser.me/api/portraits/med/women/75.jpg',
    lastMessage: 'they said that something somewhat somebody what the heck',
    unread: 0,
    createdAt: '2023-11-30T08:30:00Z',
  },
  {
    username: 'elsa',
    profileImg: 'https://randomuser.me/api/portraits/med/women/73.jpg',
    lastMessage: 'Culpa explicabo un',
    unread: 7,
    createdAt: '2023-10-28T22:30:00Z',
  },
  {
    username: 'kate',
    profileImg: 'https://randomuser.me/api/portraits/med/women/69.jpg',
    lastMessage: 'Molestias quaerat nostrum',
    unread: 3,
    createdAt: '2023-11-25T10:10:00Z',
  },
  {
    username: 'mio',
    profileImg: 'https://randomuser.me/api/portraits/med/women/95.jpg',
    lastMessage: 'Hic dolorem voluptates qu',
    unread: 0,
    createdAt: '2023-10-28T22:30:00Z',
  },
  {
    username: 'no pong',
    profileImg: 'https://randomuser.me/api/portraits/med/women/9.jpg',
    lastMessage: 'Inventore repudiandae',
    unread: 6,
    createdAt: '2023-10-15T18:05:00Z',
  },
];
