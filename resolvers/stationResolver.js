import Station from '../models/stationModel';
import {rectangleBounds} from '../utils/rectangleBounds';

export default {
  Query: {
    stations: async (parent, args) => {
      const mapBounds = rectangleBounds(
          args.bounds._northEast,
          args.bounds._southWest,
      );
      return Station.find().where('Location').within(mapBounds);
    },
  },
};

