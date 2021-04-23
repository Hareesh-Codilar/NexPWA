import { SET_PRODUCTS } from "./contants/action-type";

export const fetchProducts = () => (dispatch) => {
  console.log("hello ->>>>>");
  fetch("https://nexpwa.codilar.in/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query {
        products(filter: { category_id: {eq: "24"}}){
           
           items {
             name
             sku
             id
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
             attributes{
               attribute_id
               attribute_code
               attribute_label
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
      console.log("result product ->>>>>", response);
      let datas = {
        productDatas: response.data,
      };
      return dispatch({
        type: SET_PRODUCTS,
        payload: response.data,
      });
    })
    .catch(console.error);
  };
