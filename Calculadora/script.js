$( document ).ready(function() {
  // Handler for .ready() called.
  $('.value').on('click', function(){
    if( $(this).hasClass('operation') ) {
      if ( ! $('#display').hasClass('operation') ) {
        $('#display').val( $('#display').val() + $(this).val() );
        $('#display').addClass('operation');
      }
    }else{
      $('#display').val( $('#display').val() + $(this).val() );
      $('#display').removeClass('operation');
    }
  });

  $('#equal').on('click', function(){
    $('#display').val( eval($('#display').val()) );
  });

});
