/**
 * Created with JetBrains WebStorm.
 * User: oola
 * Date: 9/5/13
 * Time: 11:50 AM
 * To change this template use File | Settings | File Templates.
 */

function CustomTooltip(tooltipId, width)
{
	var tooltipId = tooltipId;
	//this line doesn't work for some reason
	$("body").append("<div class='tooltip' id='"+tooltipId+"'></div>");

	if(width){
		$("#"+tooltipId).css("width", width);
	}

	hideTooltip();

	function showTooltip(content, event, xOff, yOff){
		$("#"+tooltipId).html(content);
		$("#"+tooltipId).show();

		updatePosition(event, xOff, yOff);
	}

	function hideTooltip(){
		$("#"+tooltipId).hide();
	}

	function updatePosition(event, xOffset, yOffset){
		var ttid = "#"+tooltipId;

		//commented out by MII. 
	//	var xOffset = 10; //20 orig
	//	var yOffset = 5; //10 orginal

		var ttw = $(ttid).width();
		var tth = $(ttid).height();
		var wscrY = $(window).scrollTop();
		var wscrX = $(window).scrollLeft();
		var curX = (document.all) ? event.clientX + wscrX : event.pageX;
		var curY = (document.all) ? event.clientY + wscrY : event.pageY;
		var ttleft = ((curX - wscrX + xOffset*2 + ttw) > $(window).width()) ? curX - ttw - xOffset*2 : curX + xOffset;
		if (ttleft < wscrX + xOffset){
			ttleft = wscrX + xOffset;
		}
		var tttop = ((curY - wscrY + yOffset*2 + tth) > $(window).height()) ? curY - tth - yOffset*2 : curY + yOffset;
		if (tttop < wscrY + yOffset){
			tttop = curY + yOffset;
		}
		$(ttid).css('top', tttop + 'px').css('left', ttleft + 'px');
	}

	return {
		showTooltip: showTooltip,
		hideTooltip: hideTooltip,
		updatePosition: updatePosition
	}
}
