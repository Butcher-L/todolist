import { v4 } from 'uuid';

// list of prefix
export const Prefix = {
  Admin: 'adm',
  User: 'usr',
  Transaction: 'trn'
};

export function generateId(prefix, uuid) {
  const id = uuid || v4();

  if (!prefix || prefix.length === 0) {
    return id;
  }

  return `${prefix}_${id.split('-').join('')}`;
}
