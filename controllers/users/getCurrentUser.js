const getCurrentUser = async (req, res, next) => {
  const { email, name, balance } = req.user;
  res.json({
    status: 'success',
    code: 200,
    data: {
      email,
      name,
      income,
      outcome,
      balance,
    },
  });
};

module.exports = getCurrentUser;
