import { expect, test } from 'vitest'

import { isBlockTag } from './isBlockTag.js'

test('default', () => {
  expect(isBlockTag(null)).toEqual(false)
  expect(isBlockTag(undefined)).toEqual(false)
  expect(isBlockTag(false)).toEqual(false)
  expect(isBlockTag('')).toEqual(false)
  expect(isBlockTag(42)).toEqual(false)
  expect(isBlockTag(42n)).toEqual(false)
  expect(isBlockTag(42.42)).toEqual(false)
  expect(
    isBlockTag(
      '0x25a54a9cc3a78846a412eddeecb61cc642affbcffb818cc906f782ec8fbaaaaa',
    ),
  ).toEqual(false)
  expect(isBlockTag('0x1e240')).toEqual(false)

  expect(isBlockTag('latest')).toEqual(true)
  expect(isBlockTag('earliest')).toEqual(true)
  expect(isBlockTag('pending')).toEqual(true)
  expect(isBlockTag('safe')).toEqual(true)
  expect(isBlockTag('finalized')).toEqual(true)
})
