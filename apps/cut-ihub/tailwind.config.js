const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          original: '#0E366A',
          dark: '#0a264a',
          light: '#567297',
          super_dark: '#06162a',
          super_light: '#9fafc3'
        }
      },
    },
  },
  plugins: [],
};