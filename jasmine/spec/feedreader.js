/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it(`URL's are defined and not empty`, function () {
           for (let feed of allFeeds) {
             expect(feed.url).toBeDefined();
             expect(feed.url).not.toBeNull();
             expect(feed.url).not.toBe('');
           }
         });

        /* TODO: This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it(`names are defined and not empty`, function () {
           for (let feed of allFeeds) {
             expect(feed.name).toBeDefined();
             expect(feed.name).not.toBeNull();
             expect(feed.name).not.toBe('');
           }
         });
    });


    describe('The menu', function () {
        /* TODO: This test ensures the menu element is
        * hidden by default.
        */
        it('is hidden by default', function() {
          expect( $('body').hasClass('menu-hidden') ).toBeTruthy();
        });

        /* TODO: This test ensures the menu changes
        * visibility when the menu icon is clicked. The test
        * has two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('visibility change when menu icon is clicked', function (done) {

          // Checks the click triggered expectation
          $('.menu-icon-link').click();
          expect( $('body').hasClass('menu-hidden') ).toBeFalsy();

          // Automatically closes the menu and checks the triggered expectation
          setTimeout(function() {
            $('.menu-icon-link').click();
            expect( $('body').hasClass('menu-hidden') ).toBeTruthy();
            done();
          }, 1000);
        });
    });


    describe('Initial Entries', function() {
        /* TODO: This test ensures when the loadFeed
        * function is called and completes its work, there is at least
        * a single .entry element within the .feed container.
        */
        beforeEach(function(done) {
          loadFeed(0, done);
        });

        it('has at least 1 entry in feed container', function(done) {
          expect($('.feed').children().length).toBeGreaterThan(0);
          done();
        });
    });


    describe('New Feed Selection', function() {
        /* TODO: This test ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        */

        // Variables we'll be using to compare initial and updated feed values
        let feedTitle_initial, entry_initial, feedTitle_updated, entry_updated;

        beforeEach(function(done) {
          loadFeed(0, function() {
            // Gets initial values
            feedTitle_initial = $('.header-title').html();
            entry_initial = $('.entry').text();
            done();
          });
        });

        it('the feed content updates', function(done) {
          loadFeed(1, function() {
            // Gets updated values
            feedTitle_updated = $('.header-title').html();
            entry_updated = $('.entry').text();
            done();
          });
          expect(feedTitle_initial).not.toBe(feedTitle_updated);
          expect(entry_initial).not.toBe(entry_updated);
          done();
        });
    });

}());
