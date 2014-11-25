var feed = new Instafeed({
        get: 'tagged',
        tagName: 'awesome',
        clientId: 'YOUR_CLIENT_ID',
        template: '<a href="{{link}}"><img src="{{image}}" /></a>'
    });
    feed.run();
