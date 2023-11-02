$(function(){
    const regexList = [
        /[A-Z]+/,
        /[0-9]+/,
        /[!@#$]+/
    ];

    $("input[name=password]").on("input",function(){
        const password = $(this).val();

        for(let i=0; i<regexList.length; i++){
            const check = regexList[i].test(password);

            if(check){
                $(".password-check").eq(i).addClass("success");
            }
            else{
                $(".password-check").eq(i).removeClass("success");
            }
        }
    })
});