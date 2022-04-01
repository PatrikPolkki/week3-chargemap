import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    stations(start: Int, limit: Int, bounds: Bounds): [Station]
  }

  type Station {
    id: ID
    Connections: [Connection]
    Title: String
    AddressLine1: String
    Town: String
    StateOrProvince: String
    Postcode: String
    Location: PointObject
  }

  type PointObject {
    coordinates: [Float]
    type: String
  }
  
    input Bounds {
    _southWest: LatLng
    _northEast: LatLng
  }

  input LatLng {
    lat: Float
    lng: Float
  }
`;
