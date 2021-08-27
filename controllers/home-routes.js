const router = require('express').Router();
const sequelize = require('../config/connection');
const fetch = require("node-fetch");

router.get("/", (req, res) => {
  res.render("home", { style: "style.css" });
});

router.get("/signup", (req, res) => {
  res.render("signup", { style: "style.css" });
});

router.get("/login", (req, res) => {
  res.render("login", { style: "style.css" });
});


router.get('/recipes', (req, res) => {
    res.render('recipes', { style: "style.css" });
});


router.post('/recipes', (req, res) => {

    const search = (req.body.searchValue)
    console.log(search)
    // const result = 
    // await 
    fetch("https://api.spoonacular.com/recipes/complexSearch?query=" + search + "&addRecipeInformation=true&addRecipeNutrition=true&number=20&apiKey=ca7027577b24470592ca8275b05b47b3")
    .then (response => {
        // console.log(response);
        return response.json();
    })
    .then(json => {
        const data = {
            recipes: json.results
        };
        console.log(data)
        res.render('recipes', data)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

module.exports = router;

