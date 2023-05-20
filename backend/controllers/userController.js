import asyncHandler from 'express-async-handler';

/*
 * @description   Auth user and set token
 * route          POST /api/users/auth
 * @access        Public
 */
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Auth User' });
});

/*
 * @description   Register a new user
 * route          POST /api/users
 * @access        Public
 */
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Register User' });
});

/*
 * @description   Logout user
 * route          POST /api/users/logout
 * @access        Public
 */
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Logout User' });
});

/*
 * @description   Get user profile
 * route          GET /api/users/profile
 * @access        Private
 */
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get user profile' });
});

/*
 * @description   Update user profile
 * route          PUT /api/users/profile
 * @access        Private
 */
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update user profile' });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
