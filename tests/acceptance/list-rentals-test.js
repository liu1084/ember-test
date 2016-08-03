import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | homepage');

test('visiting /', function (assert) {
    visit('/');

    andThen(function () {
        assert.equal(currentURL(), '/');
    });
});

test('should list available rentals.', function (assert) {
    visit('/');
    andThen(function () {
        assert.ok(Number('1') === 1);
        assert.equal(find('.listing').length, 3, 'should see 3 rentals');
    });
});

test('should link to information about the company.', function (assert) {
    visit('/');
    andThen(function () {
        //console.log(find('a[href="/about"]').length);
        assert.equal(find('a[href="/about"]').length, 1, 'should have a link /about');
    });
    click('a:contains("About")');
    andThen(function () {
        assert.equal(currentURL(), '/about', 'should nav to about page');
    });
});

test('should link to contact information.', function (assert) {
    visit('/');
    andThen(function () {
        //console.log(find('a[href="/about"]').length);
        assert.equal(find('a[href="/contact"]').length, 1, 'should have a link /contact');
    });
    click('a:contains("Contact")');
    andThen(function () {
        assert.equal(currentURL(), '/contact', 'should nav to contact page');
    });
});

//test('should filter the list of rentals by city.', function (assert) {
//    visit('/');
//    fillIn('.list-filter input', 'Seattle');
//    keyEvent('.list-filter input', 69);
//    andThen(function(){
//        assert.equal(find('.listing').length, 1, 'should have 1 city');
//        assert.equal(find('.listing .location:contains("Seattle")').length, 1, 'should have 1 list which location is contains keywords "Seattle"');
//    });
//});

moduleForAcceptance('Acceptance | about');

test('visiting /about', function (assert) {
    visit('/about');
    andThen(function () {
        assert.equal(currentURL(), '/about');
    });
});

moduleForAcceptance('Acceptance | contact');
test('visiting /contact', function (assert) {
    visit('/contact');
    andThen(function () {
        assert.equal(currentURL(), '/contact');
    });
});
