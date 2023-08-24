/* GET 'about' page */
module.exports.about = function(req, res){
  res.render('generic-text', { title: 'About' });
  content: 'Hospi-all-us is open stop place to find your nearby hospitals and clinics.This website will help you get the information regarding hospitalls and also has revies and the hospitals description.It is most useful to contact nearby hospitals for emergencies and this information is provided in the website'

};
/* GET 'signin' page */
module.exports.signin = function(req, res){
  res.render('signin', { title: 'signin' });
  content: 'Hospi-all-us is open stop place to find your nearby hospitals and This website will help you get the information regarding hospitalls and also has revies and the hospitals description.It is most useful to contact nearby hospitals for emergencies and this information is provided in the website'
}
/* GET 'register' page */
module.exports.register = function(req, res){
  res.render('register', { title: 'register' });
  content: 'Hospi-all-us is open stop place to find your nearby hospitals and This website will help you get the information regarding hospitalls and also has revies and the hospitals description.It is most useful to contact nearby hospitals for emergencies and this information is provided in the website'
}
