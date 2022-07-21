const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/User.model");



//  GET Retrieves all of the users
//列出所有用戶
router.get("/users", (req, res, next) => {
    User.find()
        // .populate('') 之後連結另個model
        .then((allUsers) => {

            // //換算年紀的函數
            //  const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

            // //使用函數
            // getAge(allUsers[6].birthday.toString())

            // console.log(getAge(allUsers[6].birthday.toString()))

            // const ageOfEachAllUsers = allUsers.map(function (user) {
            //     return getAge(user.birthday.toString())

            // })

            //  console.log(getAge(allUsers.birthday.toString()))


            res.json(allUsers)
            // res.json({ allUsers: ageOfEachAllUsers })

        })
        .catch((err) => {
            console.log(err)
            res.json(err)
        });
});

//  GET Retrieves a specific user by id
//查看特定用戶
router.get("/users/:userId", (req, res, next) => {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: "Specified id is not valid" });
        return;
    }

    // Each Project document has `tasks` array holding `_id`s of Task documents
    // We use .populate() method to get swap the `_id`s for the actual Task documents
    User.findById(userId)
        // .populate("tasks")
        .then((user) => {

            res.status(200).json(user)
        })
        .catch((error) => res.json(error));
});







// PUT  /api/projects/:projectId  -  Updates a specific project by id
//編輯特定用戶
//不行！你不能修改別人的資料
// router.put("/projects/:projectId", (req, res, next) => {
//   const { projectId } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(projectId)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   Project.findByIdAndUpdate(projectId, req.body, { new: true })
//     .then((updatedProject) => res.json(updatedProject))
//     .catch((error) => res.json(error));
// });

// DELETE  /api/projects/:projectId  -  Deletes a specific project by id
//刪除特定用戶
//不行！你不能刪除別人的資料
// router.delete("/projects/:projectId", (req, res, next) => {
//   const { projectId } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(projectId)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   Project.findByIdAndRemove(projectId)
//     .then(() =>
//       res.json({
//         message: `Project with ${projectId} is removed successfully.`,
//       })
//     )
//     .catch((error) => res.json(error));
// });

module.exports = router;
