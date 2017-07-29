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
// import s from './Header.css';

// class Header extends React.Component {
// 	static propTypes = {
// 		// eslint-disable-next-line react/forbid-prop-types, react/require-default-props
// 		// n0de: PropTypes.object,
// 	};

// 	render() {
// 		return (
// 			<div className={s.root}>
// 				Header
//       </div>
// 		);
// 	}
// }

// export default createFragmentContainer(withStyles(s)(Header), graphql`
//   fragment Header_n0de on N0de @relay(plural: true) {
//     title
//   }
// `);
