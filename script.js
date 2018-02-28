var $checkBox = $('.checkbox-div');
var $blankBox = $('.icon-blank');

$checkBox.on('click', addBoxCheck)

function addBoxCheck() {
 $(this).find($('i')).toggleClass('icon-ok-squared');
}

