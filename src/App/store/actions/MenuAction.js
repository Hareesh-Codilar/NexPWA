import { MENU_PRODUCTS } from "./contants/action-type";

/*
 *@fetchMenuProducts get the data from api
 */
export const fetchMenuProducts = () => (dispatch) => {
  console.log("hello ->>>>>");
  fetch("https://nexpwa.codilar.in/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query {
        categoryList(filters: {ids:{eq:"23"}}){
      canonical_url
      children{
        name
        id
        position
        level
       children{
        id
        name
        position
        level
        children{
          name
          id
          position
          level
          children{
            name
            id
            position
            level
          }
        }
      }
      }
    }
         }
        `,
      variables: {
        now: new Date().toISOString(),
      },
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log("result catagori ->>>>>", response);
      return dispatch({
        type: MENU_PRODUCTS,
        payload: response.data,
      });
    })
    .catch(console.error);
};
