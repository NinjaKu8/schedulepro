import ObjectID from 'bson-objectid'

export function createObjectId(): string {
  return ObjectID().toHexString()
}