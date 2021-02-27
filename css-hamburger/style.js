//チェックボックスのチェックを外す
$(function() {
  $('.ham-item>a').click(function() {
    $('#ham-check').removeAttr('checked').prop('checked', false).change();
  });
});