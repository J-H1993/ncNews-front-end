import axios from 'axios'

const articlesApi = axios.create({
    baseURL:"https://northcoders-news-back-end-project.onrender.com/api"
})

export const getAllArticles = () => {
    return articlesApi.get("/articles").then(({data})=>{
        return data.articles;
    });
};

export const getArticleById = (id) => {
    return articlesApi.get(`/articles/${id}`).then(({data})=>{
        return data.article
    })
}

export const getCommentByArticleId = (id) =>{
    return articlesApi.get(`/articles/${id}/comments`).then(({data})=>{
        return data.comments
    })
}