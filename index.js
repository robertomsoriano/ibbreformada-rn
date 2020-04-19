import { registerRootComponent } from "expo";

import App from "./src/App";
// AWS
import Amplify, { Auth, API, PubSub, graphqlOperation } from "aws-amplify";

//@ts-ignore
import awsmobile from "./aws-exports";

// Configure Amplify
Amplify.configure({
  ...awsmobile,
  Auth: {
    identityPoolId: "us-east-1:5841bb8e-00e2-468c-850a-689722189e60",
    region: "us-east-1",
    userPoolId: "us-east-1_KowAW1w7L",
    userPoolWebClientId: "3iiviq1stpbk9t4j100ru9lhh6"
  }
});

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
