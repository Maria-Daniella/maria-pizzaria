var price , crust_price, topping_price ;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$(document).ready(function(){
  $("#chicken-mushroom").click(function(){
    $("#chicken-mushroom").slideDown('1500').hide('1000');
    $("#price").show('1500');
  });
  $("#price").click(function(){
    $("#price").slideUp('1500');
    $("#chicken-mushroom").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#chicken-tikka").click(function(){
    $("#chicken-tikka").slideDown('1500').hide('1000');
    $("#price").show('1500');
  });
  $("#price").click(function(){
    $("#price").slideUp('1500');
    $("#chicken-tikka").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#barbeque").click(function(){
    $("#barbeque").slideDown('1500').hide('1000');
    $("#price").show('1500');
  });
  $("#price").click(function(){
    $("#price").slideUp('1500');
    $("#barbeque").slideDown('1500');
  });
});
$(document).ready(function(){
  $("#barbeque-chicken").click(function(){
    $("#barbeque-chicken").slideDown('1500').hide('1000');
    $("#price").show('1500');
  });
  $("#price").click(function(){
    $("#price").slideUp('1500');
    $("#barbeque-chicken").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#hawaiian").click(function(){
    $("#hawaiian").slideDown('1500').hide('1000');
    $("#price").show('1500');
  });
  $("#price").click(function(){
    $("#price").slideUp('1500');
    $("#hawaiian").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#vegetarian").click(function(){
    $("#vegetarian").slideDown('1500').hide('1000');
    $("#price").show('1500');
  });
  $("#price").click(function(){
    $("#price").slideUp('1500');
    $("#vegetarian").slideDown('1500');
  });
});
$(document).ready(function(){
  $("button.proceed").click(function(){
    $("button.proceed").hide();
    $("div.choice").show();
  });

  $("button.deliver").click(function(){
    $("button.deliver").hide();
    $(".delivery").show();
  });
  $("button#final-order").click(function(){
    let person = $("input#name").val();
    let phone = $("input#phone").val();
    let location = $("input#location").val();
    if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){

      $("#delivery-message").append(person+" We have recieved your order and it will be delivered to "+location);
    }
    else {
      alert("Please fill in the details for delivery!");
    }
  });

  $("button.proceed").click(function(event){
   let mname = $(".name option:selected").val();
   let msize = $("#size option:selected").val();
   let mtopping = $("#topping option:selected").val();

   $("#pizzaname").append("Pizza Name - "+mname);
   $("#pizzasize").append("Pizza size - "+msize);
   $("#pizzatopping").append("Pizza Toppings - "+mtopping);
   switch(msize){
     case "mega":
        price = 1200;
        console.log("The price is " +price);
      break;
    case "large":
       price = 1000;
       console.log("The price is " +price);
     break;
     case "medium":
       price = 800;
       console.log("The price is "+price);
     break;
     case "small":
       price = 500;
       console.log(price);
     default:
       console.log("error");
   }

   switch(topping){
    case "smoked-sausage":
      topping_price = 100;
    break;
    case "vienna-sausage":
      topping_price = 100;
    break;
    case "bacon":
      topping_price = 80;
    break;
    case "cheese":
      topping_price = 60;
    break;
    default:
      console.log("No price");
 }

   let total = price + crust_price + topping_price;
   console.log(total);
   $("#pizzatotal").append("Your Total is:  sh. "+total);

     var newOrder = new Getpizza(name, size, crust,topping,total);
  console.log(newOrder);
  $(".name option:selected").val("");
  $("#size option:selected").val("");
  $("#crust option:selected").val("");
  $("#topping option:selected").val("");


   event.preventDefault();
  });

})
