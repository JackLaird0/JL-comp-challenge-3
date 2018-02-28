var $checkBox = $('.checkbox-div');
var $blankBox = $('.icon-blank')
var $hideNavButton = $('.hide-header')

console.log($('.left-nav'))
$checkBox.on('click', addBoxCheck)
$hideNavButton.on('click', hideNav)

function addBoxCheck() {
 $(this).find($('i')).toggleClass('icon-ok-squared')
}

function hideNav() {
  $(this).parents($('main-content')).find($('.left-nav')).toggleClass('hide-left-nav')
  $(this).parents($('main-content')).find($('body')).toggleClass('body-transition')
}