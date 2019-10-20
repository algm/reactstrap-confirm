import { configure } from '@storybook/react';

import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
