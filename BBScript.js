$("#search").click(function(){
     var str=$("#input").val();
 console.log(str);
    var url="https://api.bestbuy.com/v1/products(longDescription="+str+"*)?show=sku,mediumImage,salePrice,longDescription,bestSellingRank,addToCartUrl,name&pageSize=25&page=1&apiKey=t8k7uptcxtdk9j9szvn5xhsa&format=json";
$.getJSON(url,function(data) {
   
    var arrOfpsv = data.products;
    

    var html = "<table border=1 cellspacing=0 cellpadding=5><tr><th>Image</th><th>productID</th><th>Name</th><th>Price</th><th>Selling Rank</th><th>Description</th><th>buy now</th></tr>";
 
        for(var i=0;i<arrOfpsv.length;i++){
            html += "<tr><td><img src='"+arrOfpsv[i].mediumImage+"'</td><td>"+arrOfpsv[i].sku+"</td><td>"+arrOfpsv[i].name+"</td><td>"+arrOfpsv[i].salePrice+"</td><td>"+arrOfpsv[i].bestSellingRank+"</td><td>"+arrOfpsv[i].longDescription+"</td><td><a href="+arrOfpsv[i].addToCartUrl+">buy now</a></td></tr>";
        }
 
        html += "</table>";
        
        $("#list").html(html); 
    
    
 });
})

