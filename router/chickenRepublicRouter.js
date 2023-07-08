const express = require("express")
const router = express.Router()

const {createFoodMenu, getAllFood, getOneFood, getOneFoodMenu, updateFood, updateMenu, deleteFood } = require("../controller/chknRepublicController")

router.get("/", (req,res)=>{
    res.send("Welcome to my food Api")
});

router.post("/create", createFoodMenu)

router.get("/getAll", getAllFood)

router.get("/getOne/:id", getOneFood)

router.get("/getOnefood/:branch", getOneFoodMenu)

router.put("/update/:id", updateFood)

router.put("/update/:id", updateMenu)

router.delete("/delete/:id", deleteFood)








module.exports = router