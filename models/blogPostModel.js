const fs = require('fs');
const path = require('path');

function comparePosts(a, b) {
	console.log("in sort post")
	console.log(a.id + b.id)
	return b.id - a.id; 
}

module.exports = class BlogPost {
	constructor(title, body, imageURL) {
		this.title = title;
		this.body = body;
		this.imageURL = imageURL;
		let date = new Date();
		this.date = date.toString().slice(0, 15);
		this.id = Date.now();
	}

	save() {
		const p = path.join(path.dirname(process.mainModule.filename), 'data', 'posts', `${this.id}.json`);
		let post = {
			id: this.id,
			title: this.title,
			date: this.date,
			body: this.body,
		};
		fs.writeFile(p, JSON.stringify(post), err => {
			console.log(err);
		});
	}
	
	static fetchLast(cb) {
		const p = path.join(path.dirname(process.mainModule.filename), 'data', 'posts');
		fs.readdir(p, (err, items) => {
			const p2 = path.join(path.dirname(process.mainModule.filename), 'data', 'posts', items[items.length - 1]);
			fs.readFile(p2, (err, fileContent) => {
				cb(JSON.parse(fileContent));
			});
		});
	}

	static fetchNNewest(n, cb) {
		let posts = [];
		const p = path.join(path.dirname(process.mainModule.filename), 'data', 'posts');
		fs.readdir(p, (err, items) => {
			if (err) {
				console.log(err);
				cb([]);
			} else {
				for (let i = 0; i < n; i++) {
					const p2 = path.join(
						path.dirname(process.mainModule.filename),
						'data',
						'posts',
						items[items.length - (i + 1)]
					);

					fs.readFile(p2, (err, fileContent) => {
						
						let foo = JSON.parse(fileContent);
						posts.push(foo);
					});
				}
				setTimeout(function() {
					posts = posts.sort(comparePosts)
					cb(posts);
				}, 5);
				
			}
		});
	}
};
