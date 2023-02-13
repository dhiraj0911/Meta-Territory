import { ethers } from 'ethers'

import CanvasABI from '../../artifacts/contracts/Canvas.sol/Canvas.json'

const provider = new ethers.providers.Web3Provider(window.ethereum)

export const contractId = '0x755bCe6b605A6987bA9636060f52138b299d0F95'

export const Canvas = new ethers.Contract(
  contractId,
  CanvasABI.abi,
  provider
)
