$(function(){
    $("nav a").on('click', function(e){
        e.preventDefault()
        let url = this.href
        let content = $('#content')

        $('nav a.current').removeClass('current')
        $(this).addClass('current')
        $('#container').remove()
        
        
    })
})

