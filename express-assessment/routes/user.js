import express from "express";
import prisma from "../db/index.js";

const router = express.Router();

// Create the routes here

//get all active users
router.get("/active", async (req, res) => {
    const allUsers = await prisma.user.findMany({
        where: {
            isActive: true
        }
    });

    res.status(200).json({
        success: true,
        allUsers
    })
})


//Able to Create a User
router.post("/", async (req, res) => {
    const createUser = await prisma.user.create({
        data: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }
    })

    res.status(201).json({
        success: true
    })
})

//Able to Edit a User
router.put("/:id", async (req,res) => {
    const id = req.params.id;

    const editUser = await prisma.user.updateMany({
        where : {
            id: Number(id)
        }, 

        data: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }
    })

    res.status(200).json({
        success: true,
        editUser
    })
})

//Able to Delete a User
router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    const deleteUser = await prisma.user.deleteMany({
        where: {
            id: Number(id)
        },
    })

    res.status(200).json({
        success: true
    })
})


//Able to Get all Admin Users
router.get("/admin", async (req, res) => {
    const allUsers = await prisma.user.findMany({
        where: {
            isAdmin: true
        }
    });

    res.status(200).json({
        success: true,
        allUsers
    })
})


export default router;
