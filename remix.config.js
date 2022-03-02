/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  serverBuildTarget: 'vercel',
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  ignoredRouteFiles: ['.*'],
  // appDirectory: 'app',
  // assetsBuildDirectory: 'public/build',
  // publicPath: '/build/',
  // serverBuildDirectory: 'api/_build',
  // ignoredRouteFiles: ['.*'],
}
