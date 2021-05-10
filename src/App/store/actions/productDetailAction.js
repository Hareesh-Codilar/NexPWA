import { PRODUCT_DETAILS } from "./contants/action-type";

/*
 *@fetchproductDetails get the data from api
 */
export const fetchproductDetails = (id) => (dispatch) => {
  console.log("hello ->>>>>");
  fetch("https://nexpwa.codilar.in/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query {
        products(filter: {custom_filter :{ attribute:"entity_id", condition :{ eq: "${id}"}} }){
      
           items {
            id
            sku
            name
            meta_title
            image {
              disabled
              label
              path
              position
              url
            }
            price{
              regularPrice{
                amount{
                  value
                  currency
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
      console.log("product Details catagori ->>>>>", response);
      return dispatch({
        type: PRODUCT_DETAILS,
        payload: response.data,
      });
    })
    .catch(console.error);
};
