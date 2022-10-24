import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSumaryCard from '../Sheard/NewsSumaryCard/NewsSumaryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>Dragone News Home :{allNews.length}</h2>
            {
                allNews.map(news => <NewsSumaryCard
                    key={news._id}
                    news={news}
                ></NewsSumaryCard>)
            }
        </div>
    );
};

export default Home;