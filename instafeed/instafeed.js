var feed = new Instafeed({
       get: 'tagged',
        tagName: 'naturebox',
        clientId: '0c45d775c4d94644a55f79b09d0809b4',
        template: '<a href="{{link}}"><img src="{{image}}" /></a>',
        sortBy: 'most-liked',
        resolution: 'thumbnail',
        limit: 700
    });

var feed2 = new Instafeed({
       get: 'tagged',
        tagName: 'snackselfie',
        clientId: '0c45d775c4d94644a55f79b09d0809b4',
        template: '<a href="{{link}}"><img src="{{image}}" /></a>',
        sortBy: 'most-liked',
        resolution: 'thumbnail',
        limit: 700
    });

var feed3 = new Instafeed({
       get: 'tagged',
        tagName: 'Fall4NatureBox',
        clientId: '0c45d775c4d94644a55f79b09d0809b4',
        template: '<a href="{{link}}"><img src="{{image}}" /></a>',
        sortBy: 'most-liked',
        resolution: 'thumbnail',
        limit: 700
    });

feed.run();
feed2.run();
feed3.run();
