import { FAKE_CROPS } from './FAKE_CROPS';

export const FAKE_DATA = {
  growers: 10,
  regions: 11,
  crops: 43,
  users : [
    {
      name: "Bob",
      farmType: "Apartment",
      region: "A Fun Thyme",
      crops: [FAKE_CROPS[0],FAKE_CROPS[3],FAKE_CROPS[2]]
    },
    {
      name: "Frank",
      farmType: "House",
      region: "A Fun Thyme",
      crops: [
        {
          name :  "Tomato",
          progress : 0.8
        }, {
          name :  "Potato",
          progress : 0.7
        }, {
          name :  "Green Onion",
          progress : 0.6
        }
      ]
    },
    {
      name: "Francine",
      farmType: "Apartment",
      region: "A Fun Thyme",
      crops: [
        {
          name :  "Tomato",
          progress : 0.8
        }, {
          name :  "Potato",
          progress : 0.7
        }, {
          name :  "Green Onion",
          progress : 0.6
        }
      ]
    },
    {
      name: "Jia Xin",
      farmType: "House",
      region: "A Fun Thyme",
      crops: [
        {
          name :  "Tomato",
          progress : 0.8
        }, {
          name :  "Potato",
          progress : 0.7
        }, {
          name :  "Green Onion",
          progress : 0.6
        }
      ]
    },
    {
      name: "Jia Xin",
      farmType: "House",
      region: "A Fun Thyme",
      crops: [
        {
          name :  "Tomato",
          progress : 0.8
        }, {
          name :  "Potato",
          progress : 0.7
        }, {
          name :  "Green Onion",
          progress : 0.6
        }
      ]
    },
  ]
}
