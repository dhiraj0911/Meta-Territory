
<template>
  <div>
    <div class="container">
      <div class="bubbles">
        <span style="--i:14;"></span>
        <span style="--i:11;"></span>
        <span style="--i:21;"></span>
        <span style="--i:18;"></span>
        <span style="--i:12;"></span>
        <span style="--i:31;"></span>
        <span style="--i:21;"></span>
        <span style="--i:14;"></span>
        <span style="--i:19;"></span>
        <span style="--i:16;"></span>
        <span style="--i:26;"></span>
        <span style="--i:27;"></span>
        <span style="--i:15;"></span>
        <span style="--i:25;"></span>
        <span style="--i:31;"></span>
        <span style="--i:10;"></span>
        <span style="--i:29;"></span>
        <span style="--i:15;"></span>
        <span style="--i:25;"></span>
        <span style="--i:29;"></span>
        <span style="--i:34;"></span>
        <span style="--i:24;"></span>
        <span style="--i:14;"></span>
        <span style="--i:33;"></span>
        <span style="--i:12;"></span>
        <span style="--i:11;"></span>
        <span style="--i:29;"></span>
        <span style="--i:34;"></span>
        <span style="--i:24;"></span>
        <span style="--i:14;"></span>
        <span style="--i:33;"></span>
        <span style="--i:12;"></span>
        <span style="--i:11;"></span>
        <span style="--i:19;"></span>
        <span style="--i:15;"></span>
        <span style="--i:11;"></span>
        <span style="--i:41;"></span>
        <span style="--i:11;"></span>

      </div>
    </div>
    <div class="home" id="app">
      <div class="box">
        <h1 class="made">Made with...</h1>
        <div class="ethdiv">
          <img class="eth" src="./assets/Ethereum_logo_translucent.jpg" />
          <h1 class="suntitle">Ethereum</h1>
        </div>
        <div class="poldiv">
          <img class="pol" src="./assets/polygon-matic-logo.png" />
          <h1 class="suntitle">Polygon</h1>
        </div>
        <div class="filediv">
          <img class="file" src="./assets/filecoin-fil-logo.png" />
          <h1 class="suntitle">Filecoin</h1>
        </div>
      </div>

      <div class="title">
        <div class="title-inner">
          <div class="cafe">
            <div class="cafe-inner">Meta</div>
          </div>
          <div class="mozart">
            <div class="mozart-inner">Territory</div>
          </div>
        </div>
      </div>
      <div class="image">
        <img
          class="img"
          src="./assets/background.jpg"
          alt
        />
      </div>
    </div>
  </div>
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

