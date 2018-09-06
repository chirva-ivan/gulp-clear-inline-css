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
Input:
```html
<body>
  <p class="marked-text" style="font-size: 16px; line-height: 1.56; font-weight: 500;">Test</p>
</body>
```

Output:
```html
<body>
  <p class="marked-text">Test</p>
</body>
```