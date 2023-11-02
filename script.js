$(function(){
    const regexList = [
        /[A-Z]+/,
        /[0-9]+/,
        /[!@#$]+/
    ];

    $("input[name=password]").on("input", function(){
        const password = $(this).val();
        let isValid = true;

        for(let i = 0; i < regexList.length; i++){
            const check = regexList[i].test(password);

            if(!check){
                isValid = false;
                break;
            }
        }

        if (isValid) {
            $(".password-check").addClass("success");
        } else {
            $(".password-check").removeClass("success");
        }
    });
});
