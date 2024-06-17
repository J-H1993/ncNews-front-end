import axios from 'axios'

const articlesApi = axios.create({
    baseURL:"https://northcoders-news-back-end-project.onrender.com/api/articles"
})

export const getAllArticles = () => {
    return articlesApi.get("/").then(({data})=>{
        return data.articles;
    });
};