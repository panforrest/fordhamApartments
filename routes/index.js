// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */

// const apartments = [
//     {title: 'greatest apartment', img: 'accom-1.jpg'},
//     {title: 'elevator apartment', img: 'accom-2.jpg'}
// ]

router.get('/', function(req, res){
    // turbo.fetch('apartment', null)
    turbo.fetch('apartment', { title: 'Backyard Apt'} )
    .then(data => {
    	console.log(JSON.stringify(data))
    	res.render("index", { data: data})
    })
    .catch(err => {
    	console.log(JSON.stringify(err))
    	return
    })

	// res.render("index", { data: apartment})
})

/*  This route render json data */
router.get('/json', function(req, res){
	res.json({
		confirmation: 'success',
		app: process.env.TURBO_APP_ID,
		data: 'this is a sample json route.'
	})
})

/*  This route sends text back as plain text. */
router.get('/send', function(req, res){
	res.send('This is the Send Route')
})

/*  This route redirects requests to Turbo360. */
router.get('/redirect', function(req, res){
	res.redirect('https://www.turbo360.co/landing')
})


module.exports = router
