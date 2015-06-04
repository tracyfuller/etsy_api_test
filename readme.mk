# ETSY API TEST
This project is working towards implementing the Etsy API in a dynamic, column based box-form layout using two-way AngularJS data-binding.

## Previous Attempts for layout styles:

### Masonry
http://masonry.desandro.com/

Masonry is a cascading grid layout library build for jQuery. AngularJS requires that any jQuery library is wrapped in an angular directive. While this seems reasonable in theory, it can get very messy in practice.

Masonry does not easily reload and when using a two-way binding system it doesn't naturally re-align after data has been added to the dom and must be called manually. In using images, this can cause a problem (even without AngularJS) and a library like [imagesLoaded](http://imagesloaded.desandro.com/) is required to delay firing Masonry until after all of the images are ready to display.

#### Analysis
I want to revisit this idea now that I'm becoming more comfortable with AngularJS and how it interacts with the rest of an application. I believe this is still the most likely option to use with two-way data binding even though it may take longer to implement.

### Bin-packing-grid
https://github.com/chris-l/bin-packing-grid

Bin-packing-grid is a WebComponent built with Polymer. Polymer is still a very new technology created by Google which doesn't currently work with some more established languages as many of it's concepts are new and sometimes not supported. Polymer uses templating on the Shadow DOM which AngularJS doesn't currently recognize and know how to handle. As such, many Polymer errors are recorded and there isn't currently a single clean-cut way around it yet.

[ng-polymer-elements](http://ngmodules.org/modules/ng-polymer-elements) may be a solution in the future, but at the moment I don't feel that trying to get a third-party module isn't the best use of my time.

#### Analysis
While the idea of creating WebComponents with Polymer is really intriguing, the technology is still very new and isn't widely adopted. I do want to read more into Polymer in the future for it's ability to create self-contained plugins that can be used within other sites without affecting anything other than itself. This could be an interesting concept for creating a 'drag n drop' widget for DIY website builders that don't have formal training to build web apps.

## Scope Change

### Color-based visual cue system

In the interest of time, I am currently uninstalling previous layout libraries and am going to focus on a color-based visual cue instead of a size-based cue. I already have the algorithms in place to sort incoming data from the API so I am going to change display tactics and continue adding functionality for sorting and searching the data.

