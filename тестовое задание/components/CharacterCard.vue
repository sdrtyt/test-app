<template>
    <div class="character-card">
      <img :src="character.image" alt="character image" />
      <h2>{{ character.name }}</h2>
      <p>Status: {{ character.status }}</p>
      <p>Species: {{ character.species }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      character: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .character-card {
    border: 1px solid #ddd;
    padding: 16px;
    margin: 8px;
    border-radius: 8px;
    text-align: center;
  }
  .character-card img {
    max-width: 100%;
    border-radius: 50%;
  }
  </style>
  