import { registerRootComponent } from "expo";

import App from "./src/App";
// AWS
import API, { graphqlOperation } from "@aws-amplify/api";
import PubSub from "@aws-amplify/pubsub";
//@ts-ignore
import awsmobile from "./aws-exports";

// Configure Amplify
API.configure(awsmobile);
PubSub.configure(awsmobile);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
