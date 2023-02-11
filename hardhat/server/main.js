const fs = require('fs');

const Jimp = require('jimp')
const axios = require('axios')
const { ethers, Contract } = require("ethers")
require('dotenv').config();
const { Web3Storage, getFilesFromPath } = require('web3.storage')

// to update to addresses based on contract deployment
const CANVAS_ABI = require('../artifacts/contracts/Canvas.sol/Canvas.json')
const CANVAS_ADDR = "0x041dFA6a0c96B132Fe41F01c0830ea6eA09c2b2B"

const erc721_address = "0x26b19ab85180874e118cf949bac3a801cc574b3c"

const TABLE = [
    '#dddddd',
    '#ff0000',
    '#ffA500',
    '#ffff00',
    '#008000',
    '#0000ff',
    '#4b0082',
    '#ffa500',
    '#ffffff',
    '#808080',
    '#000000'
]


async function main() {
  const matic = 'https://yolo-solemn-cloud.matic-testnet.discover.quiknode.pro/cb67ac97534ad4639b27eac995373f80e9fce458/';
  const provider = new ethers.providers.JsonRpcProvider(matic)

  const Canvas = new ethers.Contract(
    CANVAS_ADDR,
    CANVAS_ABI.abi, 
    provider
  )

  Canvas.on("Image", async () => {
    const pixels = await Canvas.pixels()
    console.log('pixels loaded')

    let destArray = []
    let tempArray = []
    pixels.forEach((item, i) => {
      if (i === 0) {
        tempArray.push(Jimp.cssColorToHex(TABLE[item.val]));

      } else if (i % 10 === 0) {
        destArray.push(tempArray);
        tempArray = [];
        tempArray.push(Jimp.cssColorToHex(TABLE[item.val]));
      } else {
      tempArray.push(Jimp.cssColorToHex(TABLE[item.val]));
      }

      if (i === pixels.length - 1) {
        destArray.push(tempArray);
      }
    })

    console.log('generating image')
    let image = new Jimp(10, 10)
    destArray.forEach((row, y) => {
      row.forEach((color, x) => {
        image.setPixelColor(color, x, y);
      })
    })
    await image.writeAsync('images/nft.png')

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGU4NUVhNjc2Q0JBZkEyYjlERTM4MDdiYWQ1NjA1QTNjMjc0NzIzYjEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzU4ODI0OTU1NDUsIm5hbWUiOiJNZXRhLVRlcnJpdG9yeSJ9.YpqOOAoxD8IY-fPPGji-3bbfXBgYoTSY10O5LF9OLcA'
    const storage = new Web3Storage({ token })

    console.log('Uploading PNG')
    const png = await storage.put(await getFilesFromPath('images/nft.png'))
    console.log('PNG CID:', png)

    console.log('Uploading metadata')
    const metadata = JSON.stringify({
      name: 'Meta-Territory NFT Virtual Property',
      description: 'decentralised collaboration artwork',
      image: `https://${png}.ipfs.dweb.link/nft.png`
    })
    fs.writeFileSync('images/metadata.json', metadata)
    const met = await storage.put(await getFilesFromPath('images/metadata.json'))
    console.log('Metadata CID:', met)
    // CID is the hash of the metadata file

    const uri = `https://${met}.ipfs.dweb.link/metadata.json`
    console.log(uri)

    const url = 'https://nft.api.infura.io/'

    const headers = {
      'X-Api-Key': ['1f8d28e2f2d4420c98acc5961307c8f1'],

      'Content-Type': 'application/json'
    }
    const body = {
      url: uri,
      chain: 'MATIC',
      to: erc721_address
    }

    const res = await axios.post(url, body, { headers })
    console.log(res.data)
  })
}

main()
