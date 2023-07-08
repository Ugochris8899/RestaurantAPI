const chickenRepublic = require("../model/chickenRepublicModel")

//fuction to create a food menu

const createFoodMenu = async(req, res) =>{
    try {
        const menu = await chickenRepublic.create(req.body)
        res.status(200).json(
            {message:`The menu for the ${menu.branch} has been created`, data:menu}
        )
    } catch (error) {
       res.status(400).json(error.message) 
    }
}

const getAllFood = async(req, res) =>{
    try {
        const getAllFood = await chickenRepublic.find()
        res.json({
            message: "The available food menu's are " + getAllFood.length, data:getAllFood})
    } catch (error) {
      res.status(400).json(
        {message: error.message}
      )  
    }
}

const getOneFood = async(req, res)=>{
    const foodId = req.params.id
    const oneFood = await chickenRepublic.findById(foodId)
    res.status(200).json(
        {message: "this is the food", data:oneFood}
    )
}

const getOneFoodMenu = async(req,res)=>{
  try {
    const branch = req.params
    const oneFood = await chickenRepublic.findOne(branch)
    res.status(200).json(
        {message: "this is the food by branch", data:oneFood}
    )
  } catch (error) {
    res.status(400).json(error.message)
  }
}


const updateFood = async(req, res) =>{
  try {
    const foodId = req.params.id
    const updatedFood = await chickenRepublic.findByIdAndUpdate(foodId)
    res.status(200).json(
        {message: "The food item has been updated", data:updatedFood}
    )
  } catch (error) {
    res.status(400).json(error.message)
  }

}

const updateMenu = async(req,res)=>{try {
  const TheRestaurant = await chickenRepublic.findById(req.params.id)
  const product = await chickenRepublic.updateOne({
   "refuelMax.main":TheRestaurant.refuelMax.main },
   {$set:{"refuel.main":req.body.refuel,"refuelMax.main":req.body.refuel,
   "refuelDodo.main":req.body.refuel,"chickWizz.main":req.body.chickWizz,
   "chickWizzMeal.main":req.body.chickWizz, "refuel.protein":req.body.protein,
   "chickWizzMeal.main":req.body.protein,  "chickWizzMeal.main":req.body.chickWizzMeal,
   "refuelMax.Protein":req.body.protein}
}
)

 const getTheRestaurant = await chickenRepublic.findById(req.params.id)
   res.status(200).json(
  {message:`the menu  has been updated`,
    data:product,getTheRestaurant
})
//console.log(product)
// console.log(getTheRestaurant)
 
} catch (error) { 
  res.status(400).json(error.message)
}
}



const deleteFood = async(req, res) =>{
    try {
        const foodId = req.params.id
        const deletedFood = await chickenRepublic.findByIdAndDelete(foodId)
        res.status(200).json({message: "The food has been sold out successfully", data: deletedFood})
    } catch (error) {
        res.status(400).json(error.message)
    }
}




module.exports = {
    createFoodMenu,
    getAllFood,
    getOneFood,
    getOneFoodMenu,
    updateFood,
    updateMenu,
    deleteFood
   
}