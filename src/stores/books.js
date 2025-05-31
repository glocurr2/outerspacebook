import { defineStore } from 'pinia'
import axios from 'axios'

 export const useBookStore = defineStore('bookStore', {
    state: () => ({
       bookdata: null,
       loading: false,
       error: null,
    }),
    actions: {
    async fetchData() {
      this.loading = true;
      this.error = null;
      try {        
        const response = await axios.get("./get-books2.php")
        response.responseType = 'json';
        const allbooks = response.data.results;
        this.bookdata = allbooks; 
        return this.bookdata;            
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }      
    },   
  },
   getters: {
      hasData: (state) => state.bookdata !== null,
      isLoading: (state) => state.loading,
      getErrorMessage: (state) => state.error?.message || '',
     },
   });


