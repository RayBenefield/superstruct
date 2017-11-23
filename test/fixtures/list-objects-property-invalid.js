
import s from '../..'

export const struct = s([{ id: 'string' }])

export const value = [
  { id: '1' },
  { id: false },
  { id: '3' },
]

export const error = {
  code: 'property_invalid',
  schema: 'string',
  path: [1, 'id'],
  key: 'id',
  value: false,
}
