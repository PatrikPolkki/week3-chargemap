import {gql} from 'apollo-server-express';

export default gql`
  type Connection {
    id: ID
    Quantity: Int
    ConnectionTypeID: ConnectionType
    LevelTypeID: LevelType
    CurrentTypeID: CurrentType
  }
`;