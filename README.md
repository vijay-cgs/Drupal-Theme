# FawnBoot

Drupal 11 subtheme of `bootstrap5` (4.x), the Drupal Bootstrap5 project:
https://www.drupal.org/project/bootstrap5
Bootstrap5 provides templates, local Bootstrap 5 framework CSS and JavaScript,
icons, and theme settings.

Edit custom overrides in `scss/`. The base theme supplies its framework styles;
`style.scss` loads the custom component partials and
compiles to `css/style.css`. Add new partials with `@use` in `style.scss`.
Commit compiled CSS alongside SCSS so deployment does not require Node.js.

Run these commands from anywhere within this DDEV project:

```sh
ddev exec --dir /var/www/html/web/themes/custom/fawnboot npm ci
ddev exec --dir /var/www/html/web/themes/custom/fawnboot npm run build
ddev exec --dir /var/www/html/web/themes/custom/fawnboot npm run watch
```

Stop the watcher with Ctrl+C. Clear Drupal caches with `ddev drush cr` after
building if CSS aggregation is enabled.

To activate the theme, use Appearance > FawnBoot > Install and set as default.
