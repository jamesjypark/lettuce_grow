import { FAKE_DATA } from './FAKE_DATA';

export const FAKE_COMMUNITIES = {
  communities: [
    {
      name: "A Fun Thyme",
      lat: 49.260758,
      lng: -123.251017,
      members: [FAKE_DATA.users[0], FAKE_DATA.users[1],  FAKE_DATA.users[2]]
    }, {
      name: "Rooting For You",
      lat: 49.264515,
      lng: -123.258075,
      members: [FAKE_DATA.users[3], FAKE_DATA.users[4],  FAKE_DATA.users[0]]
    }, {
      name: "Raisin The Bar",
      lat: 49.264162,
      lng: -123.249378,
      members: ['Bob', 'Frank', 'Sam']
    }, {
      name : "Just Beet It",
      lat: 49.269200,
      lng: -123.250636,
      members: ['Bob', 'Frank', 'Sam']
    }, {
      name : "Applely Ever After",
      lat: 49.265305,
      lng: -123.205479,
      members: ['Bob', 'Frank', 'Sam']
    }, {
      name : "Bean Thinking of You",
      lat: 49.266821,
      lng: -123.223688,
      members: ['Bob', 'Frank', 'Sam']
    }, {
      name : "Growers Not Showers",
      lat: 49.259729,
      lng: -123.194442,
      members: ['Bob', 'Frank', 'Sam']
    }
  ]
}
