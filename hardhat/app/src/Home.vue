
<template>
  <div>
    <div class="home" id="app">
      <img class="eth" src="./assets/Ethereum_logo_translucent.jpg" />
      <img class="pol" src="https://cryptologos.cc/logos/polygon-matic-logo.png" />
      <img class="file" src="https://cryptologos.cc/logos/filecoin-fil-logo.png" />
      <div class="title">
        <div class="title-inner">
          <div class="cafe">
            <div class="cafe-inner">Meta'</div>
          </div>
          <div class="mozart">
            <div class="mozart-inner">Territory</div>
          </div>
        </div>
      </div>
      <div class="image">
        <img
          class="img"
          src="https://static.coincodex.com/en/resources/images//admin/news/facebooks-virtual/facebook-horizon.png"
          alt
        />
      </div>
    </div>
    <div class="homa__about">
      <div class="wrapper four">
        <div class="type">
            <h3 class="typing">What is Meta Territory</h3>
        </div>
    </div>
      <div
        class="home__aboutwritting"
      >Meta Territory is the decentralized application where the virtual world meets real ownership. With Meta Territory, users can securely purchase and own virtual land on the Ethereum blockchain stored on IPFS and web3.storage. The power of smart contracts deployed on the Polygon network ensures that your ownership of virtual land is completely in your control and tamper-proof, making it a truly decentralized and secure way to manage virtual land ownership.</div>
    </div>
    <div class="about__image">
      <img
        class="aimg"
        src="https://www.metablocksolutions.com/metaverse-event-platform-development/images/vm-img.png"
        alt
      />
    </div>
  </div>
  <!-- <a href="https://youtu.be/mBY62jtbMYM" target="_blank" data-keyframers-credit style="color: #000"></a> -->
</template>
<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
import "./styles/home.css";
</script>

