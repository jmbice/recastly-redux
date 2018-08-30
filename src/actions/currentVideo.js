var changeVideo = (video) => {
  const returnValue = {
    type: 'CHANGE_VIDEO',
    video: video 
  };
  return returnValue;
};

export default changeVideo;
