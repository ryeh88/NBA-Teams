$( function () {

$('li').click( function () {
  var teamId = $(this).attr('id');
  getTeamInfo(teamId);
  $('.teamsInfo').show();
  $(document).mouseup(function (e) {
    var container = $(".teamsInfo");
    if (!container.is(e.target) // if the target of the click isn't the container...
    && container.has(e.target).length === 0){ // ... nor a descendant of the container
      container.hide();
    }
  });
});

function getTeamInfo (teamId) {
  $.ajax({
    type: "GET",
    dataType: 'jsonp',
    contentType: "application/jsonp; charset=utf-8",
    url: "http://stats.nba.com/stats/teamdetails?teamID=" + teamId,
    success: function(data) {
        $.each(data.resultSets, function(i, item) { 
          $('.teamName').html(data.resultSets[1].rowSet[0][1] + " " + data.resultSets[1].rowSet[0][2]);
          $('.socialOne').html("<a href='" +data.resultSets[2].rowSet[0][1] + "'><img src='images/facebook.png'></img></a>")
          $('.socialTwo').html("<a href='" +data.resultSets[2].rowSet[1][1] + "'><img src='images/instagram.png'></img></a>");
          $('.socialThree').html("<a href='" +data.resultSets[2].rowSet[2][1] + "'><img src='images/twitter.png'></img></a>")
          $('td#championships').append(data.resultSets[3].rowSet[i][0] + " ");
          console.log(this); 
        });
    }
  });
};


 
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