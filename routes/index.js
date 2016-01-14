var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res) {
  var myEvent = [];
  var myEvents = [];

  myEvents = appdata.events;
  appdata.events.forEach(function(item) {
    myEvent = myEvent.concat(item.eventpics);
  });
  res.render('index', {
    title: 'Home',
    eventpics: myEvent,
    events: myEvents,
    page: 'home'
  });
});

/* GET speakers page. */
router.get('/events', function(req, res) {
  var myEvent = [];
  var myEvents = [];
  myEvents = appdata.events;

  appdata.events.forEach(function(item) {
    myEvent = myEvent.concat(item.eventpics);
  });
  res.render('events', {
    title: 'Events',
    eventpics: myEvent,
    events: myEvents,
    page: 'eventsList'
  });
});


/* GET speakers detail page */
router.get('/events/:eventid', function(req, res) {
  var myEvent = [];
  var myEvents = [];

  appdata.events.forEach(function(item) {
    if (item.shortname == req.params.eventid) {
      myEvents.push(item);
      myEvent = myEvent.concat(item.eventpics);
    }
  });
  res.render('events', {
    title: 'Events',
    eventpics: myEvent,
    events: myEvents,
    page: 'eventDetail'
  });
});

/* GET speakers page. */
router.get('/blogs', function(req, res) {
  var myBlog = [];
  var myBlogs = [];
  myBlogs = appdata.blogs;

  appdata.blogs.forEach(function(item) {
    myBlog = myBlog.concat(item.eventpics);
  });
  res.render('blogs', {
    title: 'Blogs',
    eventpics: myBlog,
    blogs: myBlogs,
    page: 'blogsList'
  });
});


/* GET speakers detail page */
router.get('/blogs/:blogid', function(req, res) {
  var myBlog = [];
  var myBlogs = [];

  appdata.blogs.forEach(function(item) {
    if (item.shortname == req.params.blogid) {
      myBlogs.push(item);
      myBlog = myBlog.concat(item.eventpics);
    }
  });
  res.render('blogs', {
    title: 'Blogs',
    eventpics: myBlog,
    blogs: myBlogs,
    page: 'blogDetail'
  });
});



module.exports = router;