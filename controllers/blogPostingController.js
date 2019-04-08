exports.getCreatePost = (req, res, next) => {
    res.render('create-post', {
        docTitle: 'Will Martin | Create a new blog post',
		path: 'create-post',
	});
};

exports.postCreatePost = (req, res, next) => {
    
};

exports.getStagePost = (req, res, next) => {
    res.render('stage-post', {
        docTitle: 'Will Martin | Verify new blog post',
		path: 'stage-post',
	});
};
