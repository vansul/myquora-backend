const headerMW = (_req, res, next) => {
  res.setHeader('access-control-allow-origin', '*');
  next();
};

module.exports = headerMW;
