<template>
  <div class="about">
  <br>
    <container>
      <div
        class="home__aboutwritting"
      >Meta Territory is the decentralized application where the virtual world meets real ownership. With Meta Territory, users can securely purchase and own virtual land on the Ethereum blockchain stored on IPFS and web3.storage. The power of smart contracts deployed on the Polygon network ensures that your ownership of virtual land is completely in your control and tamper-proof, making it a truly decentralized and secure way to manage virtual land ownership.</div>
    </container>

    <div class="about__image">
      <img
        class="aimg"
        src="https://www.metablocksolutions.com/metaverse-event-platform-development/images/vm-img.png"
        alt
      />
      </div>
    </div> 
      
</template>
<style scoped>
.home__aboutwritting{
  background-color: rgba(225,225,225,0.2);
  height: 400px;
  width: 900px;
  border-radius: 10%;
  position: relative;
  margin-top: 150px; 
  margin-left: 90px; 
  box-shadow: 1px 1px 30px rgba(33,33,33 ,1);
  font-size: 30px;
  padding: 60px;
}
.home__developer{
  display: flex;
  flex-direction: row;
  background: black;
  color: #fff;
  justify-content: space-around;
}

.aimg{
  height: 900px;
}
.about__image{
  margin-right: 200px;
}
</style>
<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>
