import NewsList from "@/components/news/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestNewsPage(){
    const LatestNews = await getLatestNews();

    return(
        <>
          <h1>Latest News Page</h1>
          <NewsList news={LatestNews}/>        
        </>
    )
}
