import NewsList from "@/components/news/news-list";
import { getLatestNews } from "@/lib/news";

const LatestNewsPage = () => {
    const LatestNews = getLatestNews();

    return(
        <>
          <h1>Latest News Page</h1>
          <NewsList news={LatestNews}/>        
        </>
    )
}

export default LatestNewsPage;