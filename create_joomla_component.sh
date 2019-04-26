destfile="joomla/tmpl/default.php"

echo "<?php defined('_JEXEC') or die; ?><app-root></app-root>" > $destfile

add_script_tag()
{
  location=$1
  target=$2
  echo '<script type="text/javascript">' >> $target
  cat $location >> $target
  echo '"</script>' >> $target

}

add_script_tag "./dist/angular-katalog/runtime.js" $destfile
add_script_tag "./dist/angular-katalog/es2015-polyfills.js" $destfile
add_script_tag "./dist/angular-katalog/polyfills.js" $destfile
add_script_tag "./dist/angular-katalog/styles.js" $destfile
add_script_tag "./dist/angular-katalog/vendor.js" $destfile
add_script_tag "./dist/angular-katalog/main.js" $destfile
