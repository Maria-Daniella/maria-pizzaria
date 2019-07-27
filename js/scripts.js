var price , crust_price, topping_price ;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}

$(document).ready(function(){
  $("button.proceed").click(function(){
    $("button.proceed").hide();
    $("div.choise").show();
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
   let pname = $(".name option:selected").val();
   let psize = $("#size option:selected").val();
   let pcrust = $("#crust option:selected").val();
   let ptopping = $("#topping option:selected").val();

   $("#pizzaname").append("Pizza Name - "+pname);
   $("#pizzasize").append("Pizza size - "+psize);
   $("#pizzacrust").append("Pizza Crust - "+pcrust);
   $("#pizzatopping").append("Pizza Toppings - "+ptopping);
   switch(psize){
    case "large":
       price = 1200;
       console.log(price);
     break;
     case "medium":
       price = 850;
       console.log("The price is "+price);
     break;
     case "small":
       price = 600;
       console.log(price);
     default:
       console.log("error");
   }
   switch(pcrust){
      case "Crispy":
        crust_price = 200;
      break;
      case "Stuffed":
        crust_price = 250;
      break;
      case "Gluten-free":
        crust_price = 180;
      break;
      default:
        console.log("No price");
   }
   switch(ptopping){
    case "Sausage":
      topping_price = 80;
    break;
    case "Bacon":
      topping_price = 70;
    break;
    case "Mushrooms":
      topping_price = 65;
    break;
    default:
      console.log("No price");
 }

   let ptotal = price + crust_price + topping_price;
   console.log(ptotal);
   $("#pizzatotal").append("Your Total is:  sh. "+ptotal);

     var newOrder = new Getpizza(pname, psize, pcrust,ptopping,ptotal);
  console.log(newOrder);
  $(".name option:selected").val("");
  $("#size option:selected").val("");
  $("#crust option:selected").val("");
  $("#topping option:selected").val("");


   event.preventDefault();
  });





})
