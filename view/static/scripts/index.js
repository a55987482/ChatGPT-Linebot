// const process = require('process'); 
$(document).ready(function() {
    

    $("#getNowPath").click(function()
    {
        console.log("Click !");
        var API = "GetCurrentPath";
        var Data = "GiveMeCurrentPath"
        doQuery(API, Data);
        // console.log(cwd());
        // console.log(process.execPath)
        // console.log(__dirname)
        // console.log(process.cwd())
    });

    function doQuery(API, Data) {
        $.ajax({
            type :"GET",
            url  : API,
            data : Data,
            dataType: "text",
            beforeSend:function(){
                console.log("發送請求中...");
            },
            success : function(data) {
                console.log("當成功接收到資料時，success 會執行並顯示結果。");
                console.log(data);
                $("#showcurrentpath").text(data);
            },
            // error : function(data) {
            //     console.log("當接收資料失敗時，error 會執行並顯示結果。");
            //     console.log(data);
            // },
            complete:function() {
                console.log("請求完成後，成功或失敗時都會進來執行");
            }
        });
    }

});