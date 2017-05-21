/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

const PageType = new ObjectType({
  name: 'Page',
  fields: {
    title: { type: StringType },
    image: { type: StringType },
  },
});

export default PageType;
