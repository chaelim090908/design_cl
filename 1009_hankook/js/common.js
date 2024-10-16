$(document).ready(function(){
    let win_w
    let pc_mobile
    
    function resize_chk(){
        win_w = $(window).width()
        if(win_w > 1100){
            pc_mobile = 'pc'
        }else{
            pc_mobile = 'mobile'
        }
    }
    resize_chk()
    $(window).resize(function(){
        resize_chk()
        console.log(win_w)
    })
    
    
})