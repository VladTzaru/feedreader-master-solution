# Feed Reader Testing

Feed Reader is a web-based application that reads RSS feeds. The goal of the project was to define a comprehensive test suite using Jasmine (a behavior-driven development framework for testing JavaScript code).

## Getting Started
To see how everything was set up, simply download the required project assets:
https://github.com/VladTzaru/feedreader-master-solution

### Prerequisites
- Jasmine 2.1.2 (included)
- Text editor for code (Atom, Sublime Text...)
- jQuery 2.1.1 (included)
- handlebars.js (included)

### Installing
Upon downloading the required project assets, open the index.html file and review the functionality of the application within your browser.

## Running the tests
To run the tests:
- Open _index.html_ in your browser
- Scroll to the bottom of the page
    _You should find 7 specs. You can run all of them at once, or individually._

### Break down into end to end tests
There are 7 specs:
* **RSS Feeds**
1. are defined
2. URL's are defined and not empty
3. names are defined and not empty
* **The menu**
4. is hidden by default
5. visibility change when menu icon is clicked
* **Initial Entries**
6. has at least 1 entry in feed container
* **New Feed Selection**
7. the feed content updates

Example:
```javascript
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
```

### Recommendation
* Explore the application's HTML (./index.html), CSS (./css/style.css) and JavaScript (./js/app.js) to gain an understanding of how it works.
* Explore the Jasmine spec file in ./jasmine/spec/feedreader.js and review the Jasmine documentation.

## Authors

* **Udacity** - *Initial work* - [frontend-nanodegree-feedreader](https://github.com/udacity/frontend-nanodegree-feedreader)
* **Vladimir Bojovic** - *Unit testing* - [GitHub](https://github.com/VladTzaru)
