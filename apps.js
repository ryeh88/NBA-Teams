$( function () {
 
  $('select.conference').change( function (){
    $('*').removeClass('gray').fadeIn();
    $('img').addClass('transform');


    // Division Drop Down Fades Out when no conference is selected
    $('.easternDivisionMenu, .westernDivisionMenu').fadeOut();



    var conferenceSelected = $(this).val();
    
    if (conferenceSelected === 'eastern') {

      $('.easternDivisionMenu').fadeIn();
      $('.western img').addClass('gray');
      // rotates nba team logo 180deg
      $('.eastern img').removeClass('transform');
      $('select.easternDivisionMenu').change( function (){
        $('.eastern img').removeClass('gray');
        $('.eastern').removeClass('gray').fadeIn();
        if ($(this).val() === 'atlantic') {
          $('li:not(.atlantic)').addClass('gray').fadeOut();
        } else if ($(this).val() === 'central') {
          $('li:not(.central)').addClass('gray').fadeOut();
        } else if ($(this).val() === 'southEast') {
          $('li:not(.southEast)').addClass('gray').fadeOut();
        }; 
      });
    } else if (conferenceSelected === 'western') {
      
      $('.westernDivisionMenu').fadeIn();
      $('.eastern img').addClass('gray');
      $('.western img').removeClass('transform');
      $('select.westernDivisionMenu').change(function (){
        $('.western img').removeClass('gray');
        $('.western').removeClass('gray').fadeIn();
        if($(this).val() === 'pacific'){
          $('li:not(.pacific)').addClass('gray').fadeOut();
        } else if($(this).val() === 'southWest'){
          $('li:not(.southWest').addClass('gray').fadeOut();
        } if($(this).val() === 'northWest'){
          $('li:not(.northWest').addClass('gray').fadeOut();
        }
      });
    };
  });
});