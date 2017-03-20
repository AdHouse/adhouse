var UserController = require ('../database/User/UserController.js');
var AdvController = require ('../database/advertisments/AdvController.js');
var CommentController = require ('../database/comment/CommentController.js');
var ApiController=require('../database/Api/ApiUserController.js')
module.exports = function (app, express) {
	
/*								Advertisment route									 */
//=============================================================================
		app.post('/api/addserv',AdvController.Addserv);
		app.get('/api/adds/getall',AdvController.getall);
		app.get('/api/addserv/:advId',AdvController.getAdv);
		app.get('/api/adds/:userID',AdvController.getAllById);
		app.get('/api/adds/admin/adminGetall',AdvController.Gadmin);
		app.post('/api/adds/appr',AdvController.Approve);
		app.post('/api/adds/reject',AdvController.Reject);

	
	
/*								user route									 */
//=============================================================================

		app.post('/api/signin', UserController.signin);
		app.post('/api/signup',UserController.signup);
		app.get('/api/getUser/:_id',UserController.getUser);
		app.put('/api/changImage',UserController.changImage);

/*								Comment  route									 */
//=============================================================================
		app.post('/api/insertComment', CommentController.insertComment);
		app.put('/api/editComment',CommentController.editComment);
		app.delete('/api/removeCommentById/delete/:_id',CommentController.removeCommentById);
		app.get('/api/getCommentsById/:advId',CommentController.getCommentsById);		
/*                             Apiroute
//==============================================================================*/
		app.post('/api/Apis/login',ApiController.signin);
		app.post('/api/Apis/signup',ApiController.signup);
		app.get('/api/advertesment/:apikey',ApiController.UserApiData);
};

