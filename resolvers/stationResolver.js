import Station from '../models/stationModel';
import Connection from '../models/connections';
import {rectangleBounds} from '../utils/rectangleBounds';

export default {
  Query: {
    stations: async (parent, args) => {
      const start = args.start || 0;
      const limit = args.limit || 10;
      const stations = await Station.find().skip(start).limit(limit);

      return args.bounds ? stations.find().
          where('Location').
          within(rectangleBounds(
              args.bounds._northEast,
              args.bounds._southWest,
          )) : stations;
    },
  },
  Mutation: {
    addStation: async (parent, args) => {
      // save the connections first
      const conns = await Promise.all(
          args.Connections.map(async (conn) => {
            const newConnection = new Connection(args);
            const result = await newConnection.save();
            return result._id;
          }),
      );

      const newStation = new Station({...args, Connections: conns});
      return newStation.save();
    },
  },

};

