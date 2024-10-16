import NewsList from "@/components/news/news-list"
import { DUMMY_NEWS } from "@/dummy-news"

const NewsPage = () => {

    return(
        <main>
            <h1>News Section</h1>
            <NewsList news={DUMMY_NEWS}/>
        </main>
    )

}


export default NewsPage