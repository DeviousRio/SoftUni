<template>
  <div class="container">
    <h2>Image Gallery</h2>
    <div class="gallery" v-for="img in gallery" :key="img.id">
      <a>
        <img :src="img.imgSrc" :alt="img.imgAlt" />
      </a>

      <div class="description">
        <div v-if="img.showDescription">
          <p class="desc">{{img.description}}</p>
          <button class="hide-desc" @click="toggleDescription(img, $event)">Show Less</button>
        </div>

        <div v-else>
          <button class="show-desc" @click="toggleDescription(img)">Show More</button>
        </div>
      </div>
    </div>
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
      gallery: [
        {
          id: 1,
          imgSrc: firstImg,
          imgAlt: "view",
          showDescription: false,
          description:
            "The Cinque Terre area is a popular tourist destination. Over the centuries, people have built terraces on the rugged, steep landscape right up to the cliffs that overlook the sea. Paths, trains and boats connect the villages as cars can reach them from the outside only via narrow and precarious mountain roads with great difficulty."
        },
        {
          id: 2,
          imgSrc: secondImg,
          imgAlt: "forest",
          showDescription: false,
          description:
            "Forrest is located in southeastern Livingston County at 40°45′0″N 88°24′36″W (40.750018, -88.409992).[4] It is in the northern part of Forrest Township, with a small area extending north into Pleasant Ridge Township."
        },
        {
          id: 3,
          imgSrc: thirdImg,
          imgAlt: "lights",
          showDescription: false,
          description: "Lights"
        },
        {
          id: 4,
          imgSrc: fourthImg,
          imgAlt: "mountains",
          showDescription: false,
          description: "Mountains"
        }
      ],
      message: "My custom gallery!"
    };
  },
  methods: {
    toggleDescription(img) {
      this.message = "Change message description";
      img.showDescription = !img.showDescription;
    }
  }
};
</script>

<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
  padding-right: 10px; /* 3 */
  padding-left: 10px; /* 3 */
}

.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}

.gallery:hover {
  border: 1px solid #777;
}

.gallery img {
  width: 100%;
  height: auto;
  cursor: pointer;
}

.descripion {
  padding: 15px;
  text-align: center;
  font-size: 20px;
}

.show-desc,
.btn-add {
  cursor: pointer;
  background-color: #008cba;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
.hide-desc {
  cursor: pointer;
  background-color: #ba0000;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.desc {
  font-size: 14px;
  padding: 2px 3px;
}
</style>