import Species from '../models/speciesModel';

export default {
  Animal: {
    async species(parent) {
      console.log('species', parent);
      return await Species.findById(parent.species);
    },
  },
  Mutation: {
    addSpecies: async (parent, args) => {
      console.log('speciesResolver, addSpecies', args);
      const newSpecies = new Species(args);
      return await newSpecies.save();
    },
  },
};
