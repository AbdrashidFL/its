Modernizr.on('webp', function(result) {
  if (result) {
    $('.basic').addClass('basic-webp')
  } else {
    $('.basic').addClass('basic-nowebp')
  }
});
// webp