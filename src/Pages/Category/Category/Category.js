import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSumaryCard from '../../Sheard/NewsSumaryCard/NewsSumaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h3>This is Category has news:{categoryNews.length}</h3>
            {
                categoryNews.map(news => <NewsSumaryCard
                    key={news._id}
                    news={news}
                ></NewsSumaryCard>)
            }
        </div>
    );
};

export default Category;