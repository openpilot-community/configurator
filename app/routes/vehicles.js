import Route from "@ember/routing/route";
// import { RouteQueryManager } from "ember-apollo-client";
// import query from "../gql/queries/configurations";



export default Route.extend({
  // modelName: 'vehicle-make',
  titleToken: function(model) {
    return "Vehicles";
  }
});
