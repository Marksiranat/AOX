<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const Memes = ref([]);
const url = ref("https://api.imgflip.com/get_memes");

function loadUser() {
  axios
    .get(url.value)
    .then((response) => {
      Memes.value = response.data;
    })

    .catch((err) => {
      console.log(err);
    });
}
onMounted(() => {
  loadUser();
});
</script>
<template>
  <div>
    <div class="d-flex justify-content-center">
      <h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-film"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"
          /></svg
        >MEME<svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-film"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"
          />
        </svg>
      </h1>
      <br />
    </div>

    <div class="container">
      <div class="row" v-for="(test, n) in Memes" :key="n">
        <div class="col-4" v-for="dt in test.memes" :key="dt.id">
          <div class="card mt-3" style="width: 18rem">
            <img :src="dt.url" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                *NAME* : {{ dt.name }} <br />
                *ID* : {{ dt.id }}<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
