// Packages the game into dist/Gravity Duel-win32-x64/ with Gravity Duel.exe
// (uses @electron/packager, which needs no admin rights or symlinks).
const { packager } = require('@electron/packager');
const path = require('path');

(async () => {
  const useIcon = !process.env.SKIP_ICON;
  const out = await packager({
    dir: __dirname,
    name: 'Gravity Duel',
    platform: 'win32',
    arch: 'x64',
    out: path.join(__dirname, 'dist'),
    overwrite: true,
    prune: false,
    icon: useIcon ? path.join(__dirname, 'build', 'icon.ico') : undefined,
    ignore: [/^\/dist/, /^\/node_modules/, /^\/build\.js$/, /\.bat$/, /^\/README\.txt$/, /^\/package-lock\.json$/],
    appCopyright: 'Gravity Duel',
  });
  console.log('Built:', out.join(', '));
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
