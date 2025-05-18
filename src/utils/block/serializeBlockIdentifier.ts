import type { BlockIdentifier } from '../../types/block.js'
import type { RpcBlockIdentifier } from '../../types/rpc.js'
import { numberToHex } from '../../utils/index.js'

/**
 * Encodes a BlockIdentifier to an RpcBlockIdentifier form
 *
 * - Docs: https://viem.sh/docs/utilities/block/serializeBlockIdentifier
 * - Needed for EIP-1898 support (https://eips.ethereum.org/EIPS/eip-1898)
 *
 * @param blockIdentifier Block identifier to encode.
 * @returns RpcBlockIdentifier value.
 *
 * @example
 * import { serializeBlockIdentifier } from 'viem'
 * const data = serializeBlockIdentifier({
 *   requireCanonical: false,
 *   blockNumber: 21444629n,
 * })
 * // { requireCanonical: false, blockNumber: '0x1473815' }
 *
 * @example
 * import { serializeBlockIdentifier } from 'viem'
 * const data = serializeBlockIdentifier({
 *   requireCanonical: true,
 *   blockHash: '0x25a54a9cc3a78846a412eddeecb61cc642affbcffb818cc906f782ec8fbaaaaa',
 * })
 * // { requireCanonical: true, blockHash: '0x25a54a9cc3a78846a412eddeecb61cc642affbcffb818cc906f782ec8fbaaaaa' }
 */
export function serializeBlockIdentifier(
  blockIdentifier: BlockIdentifier,
): RpcBlockIdentifier {
  return 'blockNumber' in blockIdentifier
    ? {
        ...blockIdentifier,
        blockNumber: numberToHex(blockIdentifier.blockNumber),
      }
    : blockIdentifier
}
