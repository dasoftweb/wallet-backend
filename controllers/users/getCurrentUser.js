const getCurrentUser = async (req, res, next) => {
  const { email, name } = req.user;
  res.json({
    status: 'success',
    code: 200,
    data: {
      email,
      name,
    },
  });
};

module.exports = getCurrentUser;
