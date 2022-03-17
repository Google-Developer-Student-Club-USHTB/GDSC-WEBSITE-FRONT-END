/**
 * This function will take a url text as argument and check if the current url is equal to the url passed
 */
export const Compare = (text) => {
  if (window.location.pathname === text) {
    return true;
  } else {
    return false;
  }
};
