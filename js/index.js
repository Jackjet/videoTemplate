/**
 * Created by root on 2017/7/9.
 */
/*$(document).pjax('a', '.main')
$.pjax.defaults.timeout = 1200
$(document).on('pjax:click', function(e) {
    console.log(123);
    //$('#loading').show()
})*/
/*if ($.support.pjax) {
    $(document).on('click', 'a', function(event) {
        //var container = $(this).closest('[data-pjax-container]')
        var containerSelector = '#' + 'pjax-container'
        $.pjax.click(event, {container: containerSelector})
    })
}*/
$(document).ready(function () {
    $('.main').pjax('nav a')
    $(document).on('click', 'a', function(e){
        //e.preventDefault();
        var url = $(this).attr('href')
        //$.pjax({url: url, container: '#pjax-container'})
        //
    })
    $.goup({
        trigger: 100,
        bottomOffset: 50,
        locationOffset: 300,
        title: '返回顶部',
        titleAsText: true
    });
});