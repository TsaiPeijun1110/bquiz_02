// JavaScript Document
function lo(th,url)
{
	$.ajax(url,{cache:false,success: function(x){$(th).html(x)}})
}
function good(news){
	$.post("./api/good.php",{news},()=>{
		location.reload();
		// switch($("#n"+news).text()){
		// 	case "讚":
		// 		$("#n"+news).text("讚")
		// 	break;
		// 	case "收回讚":
		// 		$("#n"+news).text("收回讚")
		// 	break;
		// }
	})
	}