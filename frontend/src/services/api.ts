import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3333/api',
});

// export default api;

// interface Response {
//   data: {
//     user: {
//       name: string;
//       email: string;
//     };
//     token: string;
//   };
// }

// export function post(text: string, user: object): Promise<Response> {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({
//         data: {
//           token:
//             '91j893h281h9nf98fnf2309jd09jkkd0as98238j9fr8j98f9j8f298r829r-f',
//           user: {
//             name: 'Juan',
//             email: 'juan@gmail.com',
//           },
//         },
//       });
//     }, 2000);
//   });
// }

// export const defaults = {
//   headers: {
//     Authorization: '',
//   },
// };