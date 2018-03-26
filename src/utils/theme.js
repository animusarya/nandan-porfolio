/* eslint no-unused-expressions: 0 */

import { injectGlobal } from 'styled-components';

// http://chir.ag/projects/name-that-color/
export const colors = {
	pumpkin: '#ff781a',
};

export default {
	primary: colors.pumpkin,
};

injectGlobal`
  body {
		margin: 0;
  	padding: 0;
  }
`;