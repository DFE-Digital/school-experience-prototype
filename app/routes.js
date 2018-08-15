const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line



// Example Branching
router.post('/examples/branching/over-18-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['over-18']

  if (over18 === 'false') {
    res.redirect('/docs/examples/branching/under-18')
  } else {
    res.redirect('/docs/examples/branching/over-18')
  }
})

// Main journey sort
router.post('get-into-teaching', function (req, res) {

  let howfar = req.session.data['howfar']

  console.log(req.session.data['howfar'])

  //Option 1
 if (howfar === 'new-to-teach') {
   res.redirect('get-into-teaching')
  }
  //Option 2
else if (howfar === 'assessing') {
   res.redirect('how-can-we-help')
  }
  //Option 3
else if (howfar === 'make-decision') {
   res.redirect('have-you-got-a-degree')
  }
  //Option 4
else if (howfar === 'confirming') {
   res.redirect('experience-before')
  }
  //Option 5
else if (howfar === 'applying') {
   res.redirect('itt-placement')
  }
  //Option 6
else if (howfar === 'training') {
   res.redirect('how-far')
  }


})






module.exports = router
