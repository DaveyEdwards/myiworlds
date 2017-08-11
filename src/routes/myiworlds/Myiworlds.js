// /**
//  * React Starter Kit (https://www.reactstarterkit.com/)
//  *
//  * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE.txt file in the root directory of this source tree.
//  */

// import React from 'react';
// import PropTypes from 'prop-types';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import { graphql, createFragmentContainer } from 'react-relay';
// import s from './MyiWorlds.css';
// import ContainerMapperLevel1 from '../../components/MyiWorlds/ContainerMapperLevel1/ContainerMapperLevel1';

// class MyiWorlds extends React.Component {
//   static propTypes = {
//     // n0de: PropTypes.object, // eslint-disable-line react/forbid-prop-types
//   };

//   static defaultProps = {
//     // n0de: null,
//   };

//   render() {
//     return (
//       <div>
//         {this.props.n0deByPath.type}
//         <ContainerMapperLevel1 n0de={this.props.n0deByPath} />
//       </div>
//     );
//   }
// }

// export default createFragmentContainer(
//   withStyles(s)(MyiWorlds),
//   graphql`
//     fragment MyiWorlds_n0deByPath on N0de {
//       ...ContainerMapperLevel1_n0deByPath
//     }
//   `,
// );
