$(document).ready(function(){
	$('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $('#menu-content').toggleClass('show-menu')
	});
});

function getNearestMonday() {
    var date = new Date();
    date.setDate(date.getDate() + (1 + 7 - date.getDay()) % 7);
    
    var d = date.getDate() < 10 ? '0' +  date.getDate() : date.getDate();
    var m = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    var y = date.getFullYear().toString().substring(2);
    
   return d + '.' + m + '.' + y;
}



document.getElementById('nextMonday').innerHTML = getNearestMonday();
