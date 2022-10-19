import React from 'react'
import "./NewsCard.css"

const Newscard = ({ newsItem }) => {
    // console.log(newsItem);


    const fulldate = new Date(newsItem.publishedAt);
    var date = fulldate.toString().split(" ")
    const hour = parseInt(date[4].substring(0, 2));
    const time = hour >12 ?true :false
    return (

        <div className='newsCard'>
            <img alt={newsItem.title} src={newsItem.urlToImage ? newsItem.urlToImage : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.redbubble.com%2Fi%2Fphotographic-print%2FGoogle-Chrome-Broken-Image-Icon-by-finalfinaldsign%2F29571240.6Q0TX&psig=AOvVaw0j54Jru8AJfX1H3Cu7iix9&ust=1666206541773000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKjwhJq96voCFQAAAAAdAAAAABAJ"}
                className='newsImage' />
            <div className='newsText'>
                <div>
                    <span className='title'>
                        {newsItem.title}
                    </span>
                    <br/>{" "}
                    <span className='author'>
                        <a href={newsItem.url} target="__blank">
                            <b>short</b>
                        </a>
                        <span className="muted">
                            by {newsItem.author ? newsItem.author : "unknown"} /
                            {
                                time?`${hour-12}: ${date[4].substring(3, 5)} pm`
                                    :`${hour}: ${date[4].substring(3, 5)} am`
                            }

                        </span>
                    </span>
                </div>
                <div>
                    <div className='lowerNewsText'>
                        <div className='description'>
                        {newsItem.description}
                        </div>
                        <span className='readmore'>
                        <a href={newsItem.url} target="__blank">
                            <b>{newsItem.source.name}</b>
                        </a>
                        </span>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Newscard
