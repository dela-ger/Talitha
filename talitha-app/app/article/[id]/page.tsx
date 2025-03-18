"use client";

import { useParams } from "next/navigation";
import christianArticles  from "../../../data";
// checking git 
export default function ArticleDetail() {
    // find the article by ID
    const params = useParams();

    const { id } =   params;
    const article = christianArticles.find ((item) => item.id === parseInt(id as string))
    
    if (!article) {
        return <div>Article not found</div>
    }

    return (
        <>
            <div>
                <h1>{article.title}</h1>
                <p>{article.content}</p>
                <p>{article.author}</p>
                <p>{article.date}</p>
            </div>
        </>

    )
}