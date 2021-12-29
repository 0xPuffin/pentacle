import React from "react";
import Layout from "../../components/layouts/layout";
import Tweet from '../../components/tweets/tweet'
import {mockTweet} from "../../components/tweets/mock-tweet";
import {mockTweetWithPhotos} from "../../components/tweets/mock-tweet";

export const TweetPage = () => {
    return (
      <Layout>
        <Tweet {...mockTweet}/>
        <Tweet {...mockTweetWithPhotos}/>
      </Layout>
    )
}
