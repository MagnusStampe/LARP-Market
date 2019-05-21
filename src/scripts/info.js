import _regeneratorRuntime from "babel-runtime/regenerator";

var getJSON = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var jsonData, jsonFile;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return fetch("https://larp-market.dk/wordpress/wp-json/acf/v3/info");

                    case 2:
                        jsonData = _context.sent;
                        _context.next = 5;
                        return jsonData.json();

                    case 5:
                        jsonFile = _context.sent;

                        infoPosts = jsonFile;
                        displayPosts();
                        console.log(infoPosts);

                    case 9:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getJSON() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

document.addEventListener("DOMContentLoaded", init);
var infoPosts = void 0;

function init() {
    getJSON();
}

function displayPosts() {
    var dest = document.querySelector("#subjects_container");
    dest.innerHTML = "";

    infoPosts.forEach(function (post) {
        return displayPost(post.acf);
    });
}

function displayPost(post) {
    var dest = document.querySelector("#subjects_container");
    var temp = document.querySelector("#subject_template");
    var clone = temp.cloneNode(true).content;
    clone.querySelector(".sub_header").textContent = post.headline;
    clone.querySelector(".sub_description").textContent = post.text;
    dest.appendChild(clone);
}