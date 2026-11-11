function calculateBMI() {
    var weight = Number(document.getElementById("weight").value);
    var height = Number(document.getElementById("height").value);
    var age = Number(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;

    var bmi = weight / (height / 100) ** 2;
    var calories = (weight * 10) + (height * 6.25) - (age * 5) + 5;
    calories += gender === "male" ? 5 : -161;


    var calorieTarget;
    if (bmi >= 30.0) {
        calorieTarget = calories - 750;
    } else if (bmi >= 25.0) {
        calorieTarget = calories - 500;
    } else {
        calorieTarget = calories;
    }

    document.getElementById("bmiHeading").textContent =
        "Your BMI is: " + bmi.toFixed(2);

    var personImage = document.getElementById("personImage");
    var widthScale = Math.max(0.75, Math.min(1.4, 0.75 + (bmi - 15) * 0.026));
    var heightScale = Math.max(0.9, Math.min(1.08, 0.9 + (bmi - 15) * 0.0072));
    personImage.style.transform =
        "scaleX(" + widthScale.toFixed(2) + ") scaleY(" + heightScale.toFixed(2) + ")";

    document.getElementById("calorieResult").textContent =
        "Calorie target: " + Math.round(calorieTarget) + " " + "calories/day";
}

function mealPlan() {
    var calorieTarget = Number(document.getElementById("calorieResult").textContent.split(": ")[1].split(" ")[0]);
    var mealPlan = [];
    var remainingCalories = calorieTarget;

    while (remainingCalories > 0) {
        var food = foodDatabase[Math.floor(Math.random() * foodDatabase.length)];
        if (food.cal <= remainingCalories) {
            mealPlan.push(food);
            remainingCalories -= food.cal;
        }
    }

    var mealPlanText = "Suggested Meal Plan:\n" + "Total Meal Plan Calories: " + calorieTarget + "\n";
    mealPlan.forEach(function(item) {
        mealPlanText += item.name + " (" + item.cal + " calories)\n";
    });

    document.getElementById("mealPlanResult").textContent = mealPlanText;
    document.getElementById("bmiHeading").textContent = "";
    document.getElementById("bmiResult").textContent = "";
    document.getElementById("calorieResult").textContent = "";
    document.getElementById("mealPlanResult").textContent = mealPlanText;
    
}


const foodDatabase = [
    { name: "Apple (1 medium)", cal: 95 },
    { name: "Banana (1 medium)", cal: 105 },
    { name: "Orange (1 medium)", cal: 62 },
    { name: "Grapes (1 cup)", cal: 104 },
    { name: "Strawberries (1 cup)", cal: 49 },
    { name: "Broccoli (1 cup)", cal: 55 },
    { name: "Carrots (1 cup)", cal: 52 },
    { name: "Spinach (1 cup)", cal: 7 },
    { name: "Potato (1 medium)", cal: 161 },
    { name: "Sweet Potato (1 medium)", cal: 103 },
    { name: "Avocado (half)", cal: 117 },
    { name: "Chicken Breast (4oz)", cal: 165 },
    { name: "Salmon (4oz)", cal: 235 },
    { name: "Ground Beef 80/20 (4oz)", cal: 287 },
    { name: "Egg (1 large)", cal: 72 },
    { name: "Tofu (1/2 cup)", cal: 94 },
    { name: "Black Beans (1/2 cup)", cal: 114 },
    { name: "Lentils (1/2 cup)", cal: 115 },
    { name: "Plain Greek Yogurt (1 cup)", cal: 100 },
    { name: "Almonds (1 oz)", cal: 164 },
    { name: "Peanuts (1 oz)", cal: 161 },
    { name: "Peanut Butter (2 tbsp)", cal: 188 },
    { name: "Brown Rice (1 cup cooked)", cal: 216 },
    { name: "White Rice (1 cup cooked)", cal: 205 },
    { name: "Quinoa (1 cup cooked)", cal: 222 },
    { name: "Oats (1/2 cup dry)", cal: 150 },
    { name: "Whole Wheat Bread (1 slice)", cal: 69 },
    { name: "White Bread (1 slice)", cal: 75 },
    { name: "Pasta (1 cup cooked)", cal: 220 },
    { name: "Bagel (1 medium)", cal: 245 },
    { name: "Flour Tortilla (8 inch)", cal: 144 },
    { name: "Vanilla Ice Cream (1/2 cup)", cal: 137 },
    { name: "Chocolate Chip Cookie (1 medium)", cal: 148 },
    { name: "Potato Chips (1 oz)", cal: 152 },
    { name: "Pretzels (1 oz)", cal: 108 },
    { name: "Cheddar Cheese (1 oz)", cal: 113 },
    { name: "Butter (1 tbsp)", cal: 102 },
    { name: "Olive Oil (1 tbsp)", cal: 119 },
    { name: "Whole Milk (1 cup)", cal: 149 },
    { name: "Almond Milk (1 cup)", cal: 39 },
    { name: "Orange Juice (1 cup)", cal: 112 },
    { name: "Cola (12 oz)", cal: 140 },
    { name: "Black Coffee (8 oz)", cal: 2 },
    { name: "Bacon (2 slices)", cal: 86 },
    { name: "Pork Sausage (1 link)", cal: 133 },
    { name: "Pancakes (2 medium)", cal: 172 },
    { name: "Waffle (1 large)", cal: 218 },
    { name: "Honey (1 tbsp)", cal: 64 },
    { name: "Maple Syrup (1 tbsp)", cal: 52 },
    { name: "Cheese Pizza (1 slice)", cal: 285 }
];




