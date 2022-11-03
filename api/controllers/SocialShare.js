const socialShare = async (req, res) => {
  const {query} = req
  const title = query.title.replace(/_/g, ' ');
  const description = query.description.replace(/_/g, ' ');
  const image = query.image;
  let uri;
  if (image) {
    uri =
      'https://writearn.in/social-share?title=' +
      query.title +
      '&description=' +
      query.description +
      '&image=' +
      image;
  }

  const url = uri;

  if (!title) {
    return res.status(400).json({
      message: 'Title required',
    });
  }

  if (!description) {
    return res.status(400).json({
      message: 'Description required',
    });
  }

  if (!image) {
    return res.status(400).json({
      message: 'Image required',
    });
  }
  
  return res.render('../views/SocialShare/index', {
    title,
    description,
    image,
    url,
  });
}

module.exports = {
    socialShare
}