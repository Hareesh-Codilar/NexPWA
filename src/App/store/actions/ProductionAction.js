import { SET_PRODUCTS } from "./contants/action-type";
import axios from "axios";

// export const setProducts = (products) => {
//   return {
//     type: SET_PRODUCTS,
//     payload: products,
//   };
// };
export const fetchProducts = () => (dispatch) => {
  console.log("hello ->>>>>");
  //  return dispatch({
  //     type: SET_PRODUCTS,
  //     payload: [],
  // });
  //   return (dispatch) => {
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
      console.log("result ->>>>>", response);
      let datas = {
        productDatas: response.data,
      };
      return dispatch({
        type: SET_PRODUCTS,
        payload: datas,
      });
      //   dispatch(setProducts(response.data));
    });

  //     const query = `
  //     query {
  //         products(filter: { category_id: {eq: "24"}}){
  //              items {
  //              name
  //              sku
  //            }
  //            }
  //        }
  //   `;
  //   const url = "https://nexpwa.codilar.in/graphql";
  //   const opts = {
  //     method: "POST",
  //     headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
  //     body: JSON.stringify({ query })
  //   };
  //   fetch(url, opts)
  //     .then(response => response.json())
  //     .then((response) => {
  //         console.log("result ->>>>>", response);
  //         let datas = {
  //             productDatas: response.data,

  //           }
  //         return dispatch({
  //                 type: SET_PRODUCTS,
  //                 payload: datas
  //             });
  //     //   dispatch(setProducts(response.data));
  //     })
  //     .catch(console.error);

  //     axios.get("https://nexpwa.codilar.in/graphql").then((response) => {
  //         console.log("result ->>>>>", response);
  //         let datas = {
  //             productDatas: response.data,

  //           }
  //         return dispatch({
  //                 type: SET_PRODUCTS,
  //                 payload: datas
  //             });
  //     //   dispatch(setProducts(response.data));
  //     })
  //     .catch(error => {
  //     //   dispatch(fetchDataError(error));
  //     console.log("error", error );
  //     });
  //   }
};
