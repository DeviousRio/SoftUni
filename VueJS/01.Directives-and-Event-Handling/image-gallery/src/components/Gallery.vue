<template>
  <div>
    <h2>Image Gallery</h2>
    <img :src="firstImage" alt="view" />
    <img :src="secondImage" alt="forest" />
    <img :src="thirdImage" alt="lights" />
    <img :src="fourthImage" alt="mountains" />
  </div>
</template>

<script>
import firstImg from "../../public/img/img_5terre.jpg";
import secondImg from "../../public/img/img_forest.jpg";
import thirdImg from "../../public/img/img_lights.jpg";
import fourthImg from "../../public/img/img_mountains.jpg";

export default {
  name: "Gallery",
  data: function() {
    return {
      firstImage: firstImg,
      secondImage: secondImg,
      thirdImage: thirdImg,
      fourthImage: fourthImg
    };
  }
};
</script>

<style scoped>
    img {
        width: 500px;
        height: auto;
        margin: 20px;
    }
</style>