/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PureComponent.css';

class PureComponent = ({ props }) => {
	return (
		<div>
			PureComponent
		</div>
	)
};

export default withStyles(s)(PureComponent);
