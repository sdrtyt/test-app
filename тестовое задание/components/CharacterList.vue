<template>
    <div>
      <form @submit.prevent="applyFilters">
        <input v-model="filters.name" placeholder="Filter by name" />
        <select v-model="filters.status">
          <option value="">All Statuses</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <button type="submit">Apply</button>
      </form>
  
      <div class="character-list">
        <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
      </div>
  
      <div class="pagination">
        <button @click="fetchCharacters(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
        <button @click="fetchCharacters(currentPage + 1)" :disabled="currentPage === lastPage">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import CharacterCard from './CharacterCard.vue';
  
  export default {
    components: {
      CharacterCard
    },
    setup() {
      const characters = ref([]);
      const currentPage = ref(1);
      const lastPage = ref(1);
      const filters = ref({ name: '', status: '' });
  
      const fetchCharacters = async (page = 1) => {
        try {
          const response = await axios.get('https://rickandmortyapi.com/api/character', {
            params: {
              page,
              name: filters.value.name,
              status: filters.value.status
            }
          });
          characters.value = response.data.results;
          currentPage.value = page;
          lastPage.value = response.data.info.pages;
        } catch (error) {
          console.error('Error fetching characters:', error);
        }
      };
  
      const applyFilters = () => {
        fetchCharacters();
      };
  
      onMounted(() => {
        fetchCharacters();
      });
  
      return {
        characters,
        currentPage,
        lastPage,
        filters,
        fetchCharacters,
        applyFilters
      };
    }
  };
  </script>
  
  <style scoped>
  .character-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .pagination {
    text-align: center;
    margin-top: 20px;
  }
  </style>
  