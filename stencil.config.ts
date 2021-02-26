import { Config } from '@stencil/core';
import { string } from "rollup-plugin-string";

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: "BWC",
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
    {
      type: 'dist',
      dir: 'www/dist/'
    }

  ],
  rollupPlugins: {
    before: [
      string({
      // Required to be specified
      include: "**/*.md",

      // Undefined by default
      exclude: ["**/index.html"]
    })
    ],
     after: [
      
     ]
  }
};
