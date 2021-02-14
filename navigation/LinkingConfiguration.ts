import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Landing: {
        screens:{
          LandingPage: "landing"
        }
      },
      Root: {
        screens: {
          Home: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          Calendar: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
