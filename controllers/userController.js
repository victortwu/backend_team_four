const express = require('express')
const user = express.Router()
const User = require('../models/users')
const bcrypt = require('bcrypt')


// get all users

user.get('/', (req, res)=> {
  User.find({}, (err, foundUser) => {
    if(err){
      res.status(400).json(err)
    } else {
      res.status(200).json(foundUser)
    }
  })
})


// create a user

user.post('/new', (req, res)=> {
  console.log(req.body)
  if (req.body.password.length < 8) {
    res.status(400).json({error: 'Password must be at least 8 characters'})
  } else {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (err, createdUser)=> {
      if (err) {
        res.status(400).json({message: 'User already exists'})
      } else {
        res.status(201).json(createdUser)
      }
    })
  }
})

// get a specific user

user.get('/:id', (req, res)=> {
  User.findById(req.params.id, (err, foundUser)=> {
    if(err){
      res.status(400).json(err)
    } else {
      res.status(200).json(foundUser)
    }
  })
})

// delete user

user.delete('/:id', (req, res)=> {
  User.findByIdAndDelete(req.params.id, (err, deletedUser)=> {
    if (err) {
      res.status(400).json({error: err.message})
    } else if (deletedUser === null) {
      res.status(404).json({message: 'User not found.'})
    } else {
      res.status(200).json({message: `${deletedUser.username} has been deleted`})
    }
  })
})

// update user

user.put('/:id', (req, res)=> {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser)=> {
    if (err) {
      res.status(400).json({error: error.message})
    } else {
      res.status(200).json({
        message: `User ${updatedUser.username} updated successfully.`
      })
    }
  })
})


module.exports = user
