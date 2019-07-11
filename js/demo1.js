$(function(){
  $('.cube-wrap').each(function(){
    if($(this).find('.warning').length>0){
      $(this).find('table').before('<div class="light"></div>')
    }
  })
  $('.cube>div').on('click',function(e){
    var _this = $(this),text=_this.text(),pr=_this.parent('.cube'),light=pr.siblings('.light'),
    table = pr.siblings('table');
    $('table').removeClass('show');
    e.stopPropagation();
    // alert('这是'+text+'楼');
    table.addClass('show');
  });
  $(document).click(function(){
    $('table').removeClass('show');
  })
})