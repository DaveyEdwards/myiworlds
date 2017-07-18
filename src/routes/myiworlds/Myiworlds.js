// /**
//  * React Starter Kit (https://www.reactstarterkit.com/)
//  *
//  * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE.txt file in the root directory of this source tree.
//  */
//
// import React from 'react';
// import PropTypes from 'prop-types';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import { graphql, createFragmentContainer } from 'react-relay';
// import s from './Myiworlds.css';
//
// class Myiworlds extends React.Component {
//   static propTypes = {
//     things: PropTypes.arrayOf(
//       PropTypes.shape({
//         _id: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//   };
//
//   render() {
//     return (
//       <div className={s.root}>
//         {/* <div className={s.container}>
//           <h1>Myiworlds components</h1>
//           {this.props.things.map(item =>
//             <article key={item._id}>
//               <h1>
//                 <a href={item._id}>
//                   {item.title}
//                 </a>
//               </h1>
//             </article>,
//           )}
//         </div> */}
//       </div>
//     );
//   }
// }
//
// export default createFragmentContainer(
//   withStyles(s)(Myiworlds),
//   graphql`
//     fragment Myiworlds_things on Thing @relay(plural: true) {
//       things {
//         edges {
//           node {
//             _id
//           }
//         }
//       }
//     }
//   `,
// );
