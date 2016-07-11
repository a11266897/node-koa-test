var conf;
const dir = __dirname;

conf = {
	assets : dir +'/assets',
	views : dir +'/views',
	routes : dir +'/routes',
	models : dir +'/models',
	services : dir +'/services',
	db : 'mongodb://localhost:27017/marsh'
}


module.exports = conf;
