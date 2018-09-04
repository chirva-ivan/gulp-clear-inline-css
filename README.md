# gulp-clear-inline-css
Simple gulp plugin for clearing HTML inline CSS styles.

```bash
npm install gulp-clear-inline-css
```

Usage:
```javascript
var clearInlineCss = require('gulp-clear-inline-css');

gulp.task('remove-inline-styles', function() {
  return gulp.src('./templates/*.html')
    .pipe(clearInlineCss())
    .pipe(gulp.dest('./clear-templates/'));
});
```
