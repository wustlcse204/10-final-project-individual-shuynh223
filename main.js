var apikey = "bfd365245cd62b6886850bf46cb53ba5";

document.getElementById("recipe").style.display = "none";
document.getElementById("no").style.display="none";


// document.getElementById("recipe").style.display = "none";

//var xhttp = new XMLHttpRequest();



function openRecipe(){

    event.preventDefault();
    document.getElementById("recipe").style.display = "block";

    // event.preventDefault();
    var dietID = document.getElementById("diet");
    Diet = dietID.value;
    // console.log(Diet);
    // console.log(dietID);

    var healthID = document.getElementById("health");
    Health = healthID.value;
    // console.log(Health);
    // console.log(healthID);

    var cuisineTypeID = document.getElementById("cuisineType");
    cuisineType = cuisineTypeID.value;
    // console.log(cuisineType);
    // console.log(cuisineTypeID);

    var mealTypeID = document.getElementById("mealType");
    mealType = mealTypeID.value;
    // console.log(mealType);
    // console.log(mealTypeID);



    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            var rec = JSON.parse(this.responseText);
            var recList = rec.hits;

            console.log(rec);

            if (rec.count == 0){
                document.getElementById("no").style.display="block";
                document.getElementById("recipeNamePlaceholder").style.display="none";
                document.getElementById("imagePlaceholder").style.display="none";
                document.getElementById("recipeLink").style.display="none";

               // console.log(0);
               
            }

            else{
                console.log(rec.hits[0].recipe.label);
                console.log(document.getElementById('recipeNamePlaceholder'));

                document.getElementById("no").style.display="none";
                document.getElementById("recipeNamePlaceholder").style.display="block";
                document.getElementById("imagePlaceholder").style.display="block";
                document.getElementById("recipeLink").style.display="block";


                document.getElementById('recipeNamePlaceholder').innerHTML = "Recipe Name:  " + rec.hits[0].recipe.label;

                
                document.getElementById('imagePlaceholder').src = rec.hits[0].recipe.image;
                
                document.getElementById('recipeLink').href = rec.hits[0].recipe.shareAs;
            
                //console.log(1);
                    
            }

            // document["pic1"].src = searchPic.src;
           


            
            //console.log(rec.Recipe.);

            // console.log(recList.length);

            // while(document.getElementById("recList").firstChild){
            //     var list = document.getElementById("recList");
            //     var noT = list.firstChild;
            //     list.removeChild(noT);
            // }
         
        }

        // else if (rec.count ==0){
        //     document.getElementById("no").style.display="block";
        //     document.getElementById("recipeNamePlaceholder").style.display="none";
        //     document.getElementById("imagePlaceholder").style.display="none";
            
        // }


        // for (let i = 0; i<recList; i++){
        //     var a = document.createElement("li");
        //     // a.recList.add()

        //     var label = recList.Recipe[i].label;
        //     var image = recList.Recipe[i].image;
        //     var ingredients = recList.Recipe[i].ingredients;


        //     console.log(i);

        //     var text = document.createTextNode("");

        //     a.innerHTML = "Recipe Name: " + recipeName + "<br>" + recipeImage + "<br>" + "Ingredients: " + recipeIngredients ;
        //     a.id = recList[i].id;
            
        //     var b = document.getElementById("recList");
        // }
    }
    // var str = "HELLO";
    // console.log(str);

    
    xhttp.open("GET", "https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=red%20dress&app_id=5430ee74&app_key=bfd365245cd62b6886850bf46cb53ba5&diet=" + Diet + "&health=" + Health + "&cuisineType=" + cuisineType + "&mealType=" + mealType ,  true);
    // xhttp.setRequestHeader("x-api-key", apikey);
    xhttp.send()
}

// openRecipe();

// function filterRecipes(){

    
//     event.preventDefault();

//     var dietID = document.getElementById("diet");
//     Diet = dietID.value;
//     // console.log(Diet);
//     // console.log(dietID);

//     var healthID = document.getElementById("health");
//     Health = healthID.value;
//     // console.log(Health);
//     // console.log(healthID);

//     var cuisineTypeID = document.getElementById("cuisineType");
//     cuisineType = cuisineTypeID.value;
//     // console.log(cuisineType);
//     // console.log(cuisineTypeID);

//     var mealTypeID = document.getElementById("mealType");
//     mealType = mealTypeID.value;
//     // console.log(mealType);
//     // console.log(mealTypeID);





//     var xhttp2 = new XMLHttpRequest();

//     xhttp2.onreadystatechange = function(){
//         if (this.readyState == 4 && this.status == 200){
            
//            var rec = JSON.parse(this.responseText);
//            var recList = rec.recipe;
//            console.log(recList);


//         //    while(document.getElementById("recList").firstChild){
//         //        var list = document.getElementById("recList");
//         //        var noT = list.firstChild;
//         //        list.removeChild(noT);
//         //    }

            
//         }

//         for (let i = 0; i<recList; i++){
//             var a = document.createElement("li");
//             // a.recList.add()
    
//             var label = recList.Recipe[i].label;
//             var image = recList.Recipe[i].image;
//             var ingredients = recList.Recipe[i].ingredients;
    
    
//             console.log(i);
    
            
//             a.innerHTML = "Recipe Name: " + recipeName + "<br>" + recipeImage + "<br>" + "Ingredients: " + recipeIngredients ;
//             a.id = recList[i].id;
            
//             //var b = document.getElementById("recList");
//         }
//     }

    


//     xhttp2.open("GET", "https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=red%20dress&app_id=5430ee74&app_key=bfd365245cd62b6886850bf46cb53ba5&diet=" + Diet + "&health=" + Health + "&cuisineType=" + cuisineType + "&mealType=" + mealType ,  true);
//     // xhttp2.setRequestHeader("x-api-key", apikey);
//     xhttp2.send()


// }


