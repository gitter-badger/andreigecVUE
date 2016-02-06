// create a router instance
// you can pass in additional options here, but
// let's keep it simple for now.
var router = new VueRouter()

// define some routes.
// each route should map to a component.
// we'll talk about nested routes later.
router.map({
  '/': {
    component: Home
  }  
})

// now we can start the app!
// router will create an instance of App and mount to
// the element matching the selector #app.
router.start(app, '#app')