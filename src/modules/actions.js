export const ADD_ARTICLES ='ADD_ARTICLES'

export function addArticles(data){
    return{
        type: ADD_ARTICLES,
        data: data
    }
}