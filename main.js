
var removeBotton = document.getElementsByClassName('delete')
for (var i=0 ;i<removeBotton.length ; i++){
      var bottonRemove= removeBotton[i];
      bottonRemove.addEventListener('click',function(e){
               var buttonClicked=e.target;
              
               buttonClicked.parentElement.parentElement.parentElement.remove();
               updateCartTotal() ;
            })
           
}
var likeBotton = document.getElementsByClassName('like');
for(var i=0;i<likeBotton.length;i++){
    var bottonLike =likeBotton[i]
    bottonLike.addEventListener('click',function(e){
            var botton=e.target;
             if(botton.style.color=='red'){
                 botton.style.color='rgb(219, 218, 218)';
             }else{
                botton.style.color='red';}

        })
}
var addBotton=document.getElementsByClassName('material-icons add')
for(var i=0;i<addBotton.length;i++){
    var bottonAdd=addBotton[i];
    bottonAdd.addEventListener('click',function(e){
    var botton=e.target;
    
   var inputField=botton.parentElement.firstElementChild.nextElementSibling;
       inputField.value=parseInt(parseInt(inputField.value)+1); 
       updateCartTotal() ; 
})
}
var decBotton=document.getElementsByClassName('material-icons rm')
for(var i=0;i<decBotton.length;i++){
    var bottonDec=decBotton[i];
    bottonDec.addEventListener('click',function(e){
    var botton=e.target;
    
   var inputField=botton.parentElement.firstElementChild.nextElementSibling;
       inputField.value=parseInt(parseInt(inputField.value)-1); 
       updateCartTotal();  
})
}
function updateCartTotal(){
    var CartItemContainer=document.getElementsByClassName('cart__container')[0];
    console.log(CartItemContainer);
    var CartRows=CartItemContainer.getElementsByClassName('product-1');
    console.log(CartRows);
    total=0;
    for(var i=0;i<CartRows.length;i++){
        var cartRow = CartRows[i];
        console.log(cartRow);
        var cartPrice=cartRow.getElementsByClassName('product1__price')[0].firstElementChild;
        var quantityElement=cartRow.getElementsByClassName('quantity')[0];
        var price=parseFloat(cartPrice.innerHTML.replace('$',''));
        var quantity = quantityElement.value;
        var total =total+( price * quantity);
    }
    document.getElementsByClassName('total-value')[0].innerHTML='$'+total;
  
}