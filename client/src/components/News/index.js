import React, { useEffect, useState } from "react";

import FooterCR from "../comps/Footer/FooterCR";

export default function News() {
  const [content, setContent] = useState();

  useEffect(() => {
    async function init() {
      const get = async (url, params) => {
        const response = await fetch(url + "?" + new URLSearchParams(params));
        const data = await response.json();

        return data;
      };
      const data = await get("https://newsapi.org/v2/everything", {
        apiKey: process.env.REACT_APP_NEWS_KEY,
        q: "technology",
      });
      const con = data.articles.slice(0, 50);
      setContent(
        await con.map((data) => {
          const date = Date(data.publishedAt).split(" ").slice(0, 4);
          let flag;
          if (data.urlToImage) {
            flag = data.urlToImage.split("/")[2] === "images.readwrite.com";
          }

          return (
            <div className="news_card">
              <div className="news_card_section">
                <div className="news_card_title">
                  <a href={data.url}>{data.title}</a>
                </div>
                <div className="news_card_auth">{data.author}</div>
                <div className="news_card_pt">{date.join(" ", date)}</div>
                <div className="news_card_p">{data.source.name}</div>
              </div>
              <div className="news_card_desc ">{data.description}</div>
              <div className="news_card_section">
                <div className="news_card_img">
                  {data.urlToImage && !flag ? (
                    <img
                      src={data.urlToImage}
                      alt="News"
                      className="news_article_img"
                    />
                  ) : null}
                </div>
              </div>
            </div>
          );
        })
      );
    }
    init();
  }, []);

  return (
    <>
      <div className="subpage_ctnr">
        <div className="news_content">
          <div className="sub_header">
            <span>News</span>
          </div>

          <div className="news_content_card">{content}</div>
        </div>
      </div>
      <FooterCR />
    </>
  );
}
