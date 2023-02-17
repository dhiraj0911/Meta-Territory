import { ethers } from 'ethers'

import CanvasABI from '../../artifacts/contracts/Canvas.sol/Canvas.json'

const provider = new ethers.providers.Web3Provider(window.ethereum)

export const contractId = '0x755bce6b605a6987ba9636060f52138b299d0f95'

export const Canvas = new ethers.Contract(
  contractId,
  CanvasABI.abi,
  provider
)
