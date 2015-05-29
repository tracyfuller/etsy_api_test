#ETSY API TEST
I am testing the use of the Etsy API to get an appropriate setup for use in my personal project.

masonry documentation:
http://masonry.desandro.com/

Masonry requires imagesloaded:
http://masonry.desandro.com/appendix.html#imagesloaded

imagesloaded:
http://imagesloaded.desandro.com/

masonry doesn't play with angular. To make it play, you need this:
http://passy.github.io/angular-masonry/
(warning, doesn't have documentation)

There is possibly another angular-masonry plugin that would replace the one above by passy, but I have not implemented it:
https://github.com/klederson/angular-masonry-directive

TO DO: Masonry needs to fire /after/ the images are loaded. imagesloaded delays a function while the images are loading.

A stack overflow discussion talks about the need to reload after images are pulled. The top answer contains a plunker with a way to make some things work. I don't understand the directives part but it's here:
http://stackoverflow.com/questions/16504151/masonry-with-angularjs

