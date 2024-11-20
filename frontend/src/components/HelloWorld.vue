<script lang="ts">
import { defineComponent } from 'vue';
import axiosInstance from '../api/axiosInstance'; // 作成したAxiosインスタンス

export default defineComponent({
  data() {
    return {
      message: '', // APIレスポンスを格納する
    };
  },
  methods: {
    async fetchHello() {
      try {
        const response = await axiosInstance.get('/hello'); // Spring Boot APIを呼び出す
        this.message = response.data; // レスポンスデータを保存
      } catch (error) {
        console.error('Error fetching API:', error);
      }
    },
  },
});
</script>

<template>
  <div>
    <h1>Spring Boot API Test</h1>
    <button @click="fetchHello">Fetch Greeting</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
