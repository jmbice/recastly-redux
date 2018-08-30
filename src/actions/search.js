import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';



var handleVideoSearch = (q) => {
  return () => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, (success) => {
      changeVideoList(success);
      changeVideo(success[0]);
    });
  };
};

export default handleVideoSearch;
