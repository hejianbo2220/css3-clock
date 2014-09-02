/* *********
 *    author:hejianbo
 *    version:1.0
 *    Date:2014-9-2
 *    file:css3-clock.js
 ********* */

$(document).ready(function(e) {
	/* init hand */
	var init_seconds = new Date().getSeconds();
	var init_minutes = new Date().getMinutes();
	var init_hours = new Date().getHours();
	var init_sdegree = init_seconds * 6;
	var init_mdegree = init_minutes * 6;
	var init_hdegree = init_hours * 30 + (init_minutes / 2);
	var init_srotate = "rotate(" + init_sdegree + "deg)";
	var init_mrotate = "rotate(" + init_mdegree + "deg)";
	var init_hrotate = "rotate(" + init_hdegree + "deg)";
	$("#sec").css("transform", init_srotate);
	$("#min").css("transform", init_mrotate);
	$("#hour").css("transform", init_hrotate);
	
	/* inject hand */
	setInterval(function () {
		var seconds = new Date().getSeconds();
		var sdegree = seconds * 6;
		var srotate = "rotate(" + sdegree + "deg)";
		$("#sec").css("transform", srotate);
	}, 1000);
	setInterval(function () {
		var minutes = new Date().getMinutes();
		var mdegree = minutes * 6;
		var mrotate = "rotate(" + mdegree + "deg)";
		$("#min").css("transform", mrotate);
	}, 1000);
	setInterval(function () {
		var hours = new Date().getHours();
		var minutes = new Date().getMinutes();
		var hdegree = hours * 30 + (minutes / 2);
		var hrotate = "rotate(" + hdegree + "deg)";
		$("#hour").css("transform", hrotate);
	}, 1000);
});