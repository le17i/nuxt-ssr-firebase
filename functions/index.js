const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')

const app = express()

const config = {
	dev: false,
	buildDir: 'nuxt',
	build: {
		publicPath: '/'
	}
}
const nuxt = new Nuxt(config)

function handlerRequest(req, res) {
	res.set('Cache-control', 'public, max-age=600, s-maxage=1200')
	nuxt.renderRoute('/')
		.then(result => res.send(result.html))
		.catch(e => res.send(e))
}

app.get('*', handlerRequest)

exports.app = functions.https.onRequest(app)