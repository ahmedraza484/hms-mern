const generateToken = (user, message, statucCode, res) => {
  const token = user.generateJsonWebToken();
  res
    .status(statucCode)
    .cookie("userToken", token, {
      expries: new Date(
        Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
      ),
      httpOnly: true,
      
    })
    .json({
      success: true,
      message,
      user,
      token,
    });    
};
export { generateToken };
