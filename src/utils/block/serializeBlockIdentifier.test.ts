import { expect, test } from 'vitest'

import { serializeBlockIdentifier } from './serializeBlockIdentifier.js'

test('default', () => {
  expect(
    serializeBlockIdentifier({
      requireCanonical: false,
      blockNumber: 21444629n,
    }),
  ).toEqual({
    requireCanonical: false,
    blockNumber: '0x1473815',
  })
  expect(
    serializeBlockIdentifier({
      blockNumber: 123456n,
    }),
  ).toEqual({
    blockNumber: '0x1e240',
  })
  expect(
    serializeBlockIdentifier({
      requireCanonical: true,
      blockHash:
        '0x25a54a9cc3a78846a412eddeecb61cc642affbcffb818cc906f782ec8fbaaaaa',
    }),
  ).toEqual({
    requireCanonical: true,
    blockHash:
      '0x25a54a9cc3a78846a412eddeecb61cc642affbcffb818cc906f782ec8fbaaaaa',
  })
  expect(
    serializeBlockIdentifier({
      blockHash:
        '0x25a54a9cc3a78846a412eddeecb61cc642affbcffb818cc906f782ec8fbaaaaa',
    }),
  ).toEqual({
    blockHash:
      '0x25a54a9cc3a78846a412eddeecb61cc642affbcffb818cc906f782ec8fbaaaaa',
  })
})
