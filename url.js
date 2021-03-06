const base = "http://api.dayswithyou.tk:8081";

const url = {
  base: base,
  isIDNew: base + '/is_id_new',
  isLoggedIn: base + '/is_logged_in',
  login: base + '/login',
  logout: base + '/logout',
  register: base + '/register',
  getUserInfo: base + '/get_user_info',
  getPosts: base + '/get_posts',
  addPost: base + '/add_post',
  delPost: base + '/del_post',
  clearCookie: base + '/clearCookie',
};
export default url;
