import type { BlockTag } from '../../types/block.js'

export function isBlockTag(blockTag: unknown): blockTag is BlockTag {
  return (
    typeof blockTag === 'string' &&
    ['latest', 'earliest', 'pending', 'safe', 'finalized'].includes(blockTag)
  )
}
