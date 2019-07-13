const getDb = require('../util/database').getDb;
const ObjectId = require('mongodb').ObjectId;
class BlogPost {
	constructor(title, imageUrl, body, tags) {
		this.title = title;
		this.imageUrl = imageUrl;
		this.body = body;
		const summarize = body => {
			let summary = body;
			if (summary.length > 120) {
				summary = summary.slice(0,120);
				summary += '...';
				return summary; 
			}
			else {return body };
		};
		this.bodySummary = summarize(body);
		this.tags = tags;
		let date = new Date();
		this.timestamp = date.toString().slice(0, 15);
	}

	save() {
		const db = getDb();
		return db
			.collection('posts')
			.insertOne(this)
			.then(result => {
				console.log(result)
			})
			.catch(err => {
				console.log(err);
			});
	}

	static fetchAll() {
		const db = getDb();
		return db
			.collection('posts')
			.find()
			.toArray()
			.then(posts => {
				return posts;
			})
			.catch(err => {
				console.log(err);
			});
	}

	static fetchById(id) {
		const db = getDb();
		let objectId = new ObjectId(id);
		return db
			.collection('posts')
			.find({ "_id": objectId })
			.toArray()
			.then(post => {
				return post;
			})
			.catch(err => {
				console.log(err);
			});
	}
}

module.exports = BlogPost;

// 	static fetchLast(cb) {
// 		const p = path.join(path.dirname(process.mainModule.filename), 'data', 'posts');
// 		fs.readdir(p, (err, items) => {
// 			const p2 = path.join(path.dirname(process.mainModule.filename), 'data', 'posts', items[items.length - 1]);
// 			fs.readFile(p2, (err, fileContent) => {
// 				cb(JSON.parse(fileContent));
// 			});
// 		});
// 	}

// 	static fetchNNewest(n, cb) {
// 		let posts = [];
// 		const p = path.join(path.dirname(process.mainModule.filename), 'data', 'posts');
// 		fs.readdir(p, (err, items) => {
// 			if (err) {
// 				console.log(err);
// 				cb([]);
// 			} else {
// 				for (let i = 0; i < n; i++) {
// 					const p2 = path.join(
// 						path.dirname(process.mainModule.filename),
// 						'data',
// 						'posts',
// 						items[items.length - (i + 1)]
// 					);

// 					fs.readFile(p2, (err, fileContent) => {

// 						let foo = JSON.parse(fileContent);
// 						posts.push(foo);
// 					});
// 				}
// 				setTimeout(function() {
// 					posts = posts.sort(comparePosts)
// 					cb(posts);
// 				}, 5);

// 			}
// 		});
// 	}
// };
