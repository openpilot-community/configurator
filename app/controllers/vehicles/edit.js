import Controller from '@ember/controller';
import EmberObject, { computed, get } from '@ember/object';
import { empty, alias } from '@ember/object/computed';

export default Controller.extend({
  pageTitle: "New Vehicle",
  makes: computed(function() {
    return this.get("store").findAll("vehicle-make");
  }),
  year: alias("model.year"),
  selectedMake: null,
  vehicleModels: computed("model.make",function() {
    const selectedMakesModels = get(this,"model.make");

    if (selectedMakesModels) {
      console.log(selectedMakesModels);
      return selectedMakesModels;
    }
  }),
  trimsFiltered: computed("year","selectedModel.vehicleTrims.@each",function() {
    let trims = get(this,"selectedModel.vehicleTrims");
    let year = get(this,"year");
    console.log("trims:",trims);
    if (trims && year) {
      console.log("Has trims");
      console.log("Filtering by year:",year);
      let filteredTrims = trims.filter((item) => {
        return parseInt(item.get("year")) === parseInt(year)
      }).sortBy("trim");

      console.log(filteredTrims);
      return filteredTrims;
    }
  }),
  noSelectedMake: empty('selectedMake'),
  noSelectedModel: empty('selectedModel'),
  actions: {
    createMake(make) {

    },
    createTrim() {

    },
    hideCreateOptionOnSameName(term) {
      console.log("term:",term);
      let existingOption = this.get('makes').findBy('name', term);
      return !existingOption;
    },
    changeMake(item) {
      this.set("selectedMake",item);
      this.set("models",item.get("models"));
    },

    changeModel(item) {
      this.set("selectedModel",item);
      this.set("trims",item.get("trims"));
    },

    createModel(model) {

    },

    searchTrims(term) {
      return this.get("store").query("vehicleTrim",{
        vehicle_model: get(this,"selectedModel.id"),
        vehicle_make: get(this,"selectedMake.id")
      })
    },
    changeTrim(item) {
      this.set("selectedTrim",item);
    },
    searchMakes(term) {
      // return the array with the new results
      return this.get('makes').filter(make => make.indexOf(term) > -1);
    },
    searchModels(term) {
      // return the array with the new results
      return this.get('vehicleModels').filter(model => model.indexOf(term) > -1);
    },
    submit() {
      this.get("model").save();
    }
  }
});
