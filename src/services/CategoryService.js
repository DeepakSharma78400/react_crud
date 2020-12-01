import axios from 'axios';

const CATEGORY_API_BASE_URL = "http://127.0.0.1:8000/api";
const CATEGORY_ADMIN_API_BASE_URL = "http://127.0.0.1:8000/api/admin";

class CategoryService {
    getCategory(){
        return axios.get(CATEGORY_API_BASE_URL + '/getCategory');
    }

    createCategory(categoryName){
        return axios.post(CATEGORY_ADMIN_API_BASE_URL + '/addCategory', categoryName);
    }

    getCategoryById(categoryId){
        return axios.get(CATEGORY_API_BASE_URL + '/getCat/' + categoryId);
    }

    updateCategory(category, categoryId){
        return axios.post(CATEGORY_ADMIN_API_BASE_URL + '/addCategory',categoryId,category);
    }

    deleteCategory(categoryId){
        return axios.post(CATEGORY_ADMIN_API_BASE_URL + '/deleteCategory',categoryId);
    }
}
export default new CategoryService();