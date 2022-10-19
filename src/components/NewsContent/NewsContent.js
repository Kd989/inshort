import { Container } from '@mui/system'
import React from 'react'
import logo from '../../images/appstore.png'
import logo1 from '../../images/googlestore.png'
import "./NewsContent.css"
import NewsCard from '../NewsCard'





const NewsContent = ({ newsArray, newsResults ,loadMore,setLoadmore}) => {
    return (
        <>
            <Container maxWidth="md">

                <div className='content'>
                    <div className='downloadMessage'>
                        <span className='downloadText'>
                            for the best experiece use inshort app on your smartphone
                        </span>
                        <img alt={"logo"} height="80%" src={logo} />
                        <img alt={"logo1"} height="80%" src={logo1} />

                    </div>
                    
                        { newsArray.map((newsItem) => {
                         return  <NewsCard newsItem={newsItem} key={newsItem.title} />

                        })}

                        {
                            loadMore<=newsResults &&(
                                <>
                                       <hr/>
                        <button className='loadmore' onClick={()=>setLoadmore(loadMore+20)}>
                            LoadMore
                        </button>
                                </>
                            )
                        }

                     
                    
                </div>

            </Container>
        </>
    )

}

export default NewsContent
