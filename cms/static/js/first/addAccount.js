$(function(){

});

//添加账号
$("body").on("click","#saveAccount",function(){
   saveAccount();
});

//保存账号
function saveAccount(){
    $("#accountForm").attr("action","saveAccount");
    $.ajaxSetup({});
    $("#accountForm").ajaxSubmit({
        resetForm:false,
        dataType:'html',      //不是严谨的json字符串传递，所以是html传递
        success:function(data){
            if(data==1){
                alert("操作成功!");
                location.href="/cms/accountList";
            }
            else{
                alert("操作失败!");
                return false;
            }
        }
    });
}