import christianArticles  from "../../../data";

export default function ArticleDetail({ params }: { params: { id: string } }) {
    // find the article by ID
    const article = christianArticles.find ((item) => {
        return item.id === parseInt(params.id)
    })
    
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