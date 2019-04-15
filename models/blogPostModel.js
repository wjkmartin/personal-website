const fs = require('fs');
const path = require('path');

module.exports = class BlogPost {
	constructor(title, body) {
		this.title = title;
		this.body = body;
		this.id = Date.now();
	}

	save() {
		const p = path.join(path.dirname(process.mainModule.filename), 'data', 'posts', `${this.id}.json`);
		let post = {
			title: this.title,
			body: this.body,
		};
		fs.writeFile(p, JSON.stringify(post), err => {
			console.log(err);
		});
	}

	static fetchAll() {
		//
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

	static fetchNthNewest(n, cb) {
		const p = path.join(path.dirname(process.mainModule.filename), 'data', 'posts');
		fs.readdir(p, (err, items) => {
			if (err) {
				console.log(err);
				cb([]);
			} else {
				const p2 = path.join(
					path.dirname(process.mainModule.filename),
					'data',
					'posts',
					items[items.length - (n + 1)]
				);
				fs.readFile(p2, (err, fileContent) => {
					let foo = JSON.parse(fileContent)
					cb(foo);
				});
			}
		});
	}
};
