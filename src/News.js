import React, {useState, useEffect} from "react";
import styles from "./News.module.css";
function News(){
    const [data, setData] = useState([]);
    const [source, setSource] = useState([]);
    const [error, setError] = useState(null);
    const [newsdata, setNewsData] = useState([]);
    const [searchterm, setsearchTerm] = useState('');

    useEffect(()=>{
        fetch("https://newsapi.org/v2/everything?q=apple&from=2022-07-30&to=2022-07-30&sortBy=popularity&apiKey=bede4d6472c8480ea859eb8bf93e6a90")
        .then((res)=>{
            if (res.ok) {
                return res.json();
            }
            throw Error('OOPs!!! Something went wrong / Daily API limit Reached');
        })
        .then((data)=>{
            setData(data.articles);
            const source = [...new Set(data.articles)];
            setSource(source)
        })
        .catch((error)=>{
            console.log(error)
            setError(error.message);
        });  
        console.log(data);
      
    }, [])

    useEffect(()=>{
        const filtereddata = data.filter((data)=>{
            return data.title.toLowerCase().includes(searchterm.toLowerCase());
        })
        setNewsData(filtereddata);
        console.log(searchterm);

    },[[], searchterm])

    return(
        <div className={styles.main}>
            <div className={styles.search}>
                <input type="text" placeholder="Search News..." onChange={(e)=>setsearchTerm(e.target.value)}></input>
                <select className={styles.source_list}>
                    <option value="">Select Source</option>
                    {
                        source.map((s)=>(
                            <option>{s.source.name}</option>
                        ))
                    }
                </select>
            </div>
            
            <div className={styles.news}>
                { newsdata &&
                    newsdata?.map((data)=>(
                        <div className={styles.news_card}>
                                <a href={data.url} target="_blank"><div className={styles.content}>
                                    <div className={styles.image}>
                                        <img src={data.urlToImage}></img>
                                    </div>
                                    <div className={styles.text}>
                                        <h1>{data.title}</h1>
                                        <h2>{data.description}</h2>
                                        <p>{data.content}</p>
                                        <span>Read more...</span>
                                    </div>
                                </div></a>  
                        </div>
                    ))
                    
                }
                
            </div>
            
            <div className={styles.error}>
                {error && <div className={styles.errmsg}>{error}</div>}
            </div>
        </div>
    )
}

export default News;