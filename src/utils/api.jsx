import axios from 'axios'

const articlesApi = axios.create({
    baseURL:"https://northcoders-news-back-end-project.onrender.com/api"
})

export const getAllUsers = () =>{
    return articlesApi.get('/users').then(({data})=>{
        return data.users;
    })
}

export const getAllArticles = (topic) => {
    return articlesApi.get("/articles", {params:{topic:topic}}).then(({data})=>{
        return data.articles;
    });
};

export const getArticleById = (id) => {
    return articlesApi.get(`/articles/${id}`).then(({data})=>{
        return data.article;
    })
}

export const getCommentByArticleId = (id) =>{
    return articlesApi.get(`/articles/${id}/comments`).then(({data})=>{
        return data.comments;
    })
}

export const voteByArticleId = (id, voteData) =>{
    return articlesApi.patch(`/articles/${id}`, voteData).then(({data})=>{
        return data.comments;

    })
}

export const addCommentByArticleId = (id,commentData, username) =>{
    let send = {
        username:username,
        body:commentData.body
    }
    return articlesApi.post(`/articles/${id}/comments`, send).then(({data})=>{
        return data.comments;
    })
}

export const removeCommentByCommentId = (commentId) =>{
    console.log(commentId)
    return articlesApi.delete(`/comments/${commentId}`).then(()=>{
        alert("Comment deleted.")

    })}

export const getTopics = () => {
    return articlesApi.get(`/topics`).then(({ data }) => {
    return data.topics;
        });
    }
