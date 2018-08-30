var changeVideoList = (video) => {
  return {
    type: 'CHANGE_VIDEO_LIST',
    videos: video,
  };
};

export default changeVideoList;
