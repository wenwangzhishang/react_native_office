'use strict';

Object.defineProperty(exports, "__esModule", {value: true});
exports.default = undefined;

var _createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _class,
  _class2,
  _temp;
//     react-native-loading-spinner-overlay
//     Copyright (c) 2016- Nick Baugh <niftylettuce@gmail.com>
//     MIT Licensed

// * Author: [@niftylettuce](https://twitter.com/#!/niftylettuce)
// * Source:
// <https://github.com/niftylettuce/react-native-loading-spinner-overlay>

// # react-native-loading-spinner-overlay
//
// <https://github.com/facebook/react-native/issues/2501>
// <https://rnplay.org/apps/1YkBCQ>
// <https://github.com/facebook/react-native/issues/2501>
// <https://github.com/brentvatne/react-native-overlay>
//

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactNativeGiftedSpinner = require('react-native-gifted-spinner');

var _reactNativeGiftedSpinner2 = _interopRequireDefault(_reactNativeGiftedSpinner);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule
    ? obj
    : {
      default: obj
    };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : subClass.__proto__ = superClass;
  }

var Portal = require('react-native/Libraries/Portal/Portal.js');

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  float: {
    height: 150,
    width: 260,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

var SIZES = ['small', 'normal', 'large'];

var tag = void 0;

var Spinner = (0, _autobindDecorator2.default)(_class = (_temp = _class2 = function(_React$Component) {
  _inherits(Spinner, _React$Component);

  function Spinner(props) {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Spinner).call(this, props));
  }

  _createClass(Spinner, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        if (_reactNative.Platform.OS === 'android')
          tag = Portal.allocateTag();
        }
      }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (_reactNative.Platform.OS === 'android')
          tag = null;
        }
      }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {

        if (_reactNative.Platform.OS !== 'android')
          return;

        if (!prevProps.visible && this.props.visible)
          return Portal.showModal(tag, this._renderSpinner());

        if (prevProps.visible && !this.props.visible)
          Portal.closeModal(tag);
        }
      }, {
      key: '_renderSpinner',
      value: function _renderSpinner() {

        if (!this.props.visible)
          return _reactNative2.default.createElement(_reactNative.View, null);

        // TODO: once RN version is released for this pull request
        // then we will integrate this `"Normal"` styleAttr property as default
        //let styleAttr = 'Normal';

        var styleAttr = 'Inverse';
        var size = 'large';

        switch (this.props.size) {
          case 'small':
            styleAttr = 'SmallInverse';
            size = 'small';
            break;
          case 'large':
            styleAttr = 'LargeInverse';
            size = 'large';
            break;
        }

        var spinner = _reactNative2.default.createElement(_reactNative.View, {
          style: styles.container,
          key: 'spinner' + Date.now()
        }, _reactNative2.default.createElement(_reactNative.View, {
          style: [
            styles.background, {
              backgroundColor: this.props.overlayColor
            }
          ]
        }, _reactNative2.default.createElement(_reactNative.View, {
          style: [
            styles.float, {
              backgroundColor:this.props.floatColor,
            }
          ]
        }, [_reactNative2.default.createElement(_reactNativeGiftedSpinner2.default, {
          color: this.props.color,
          size: size,
          style: {
            flex: 1
          },
          styleAttr: styleAttr
        }), _reactNative2.default.createElement(_reactNative.Text, {
          style: {
            color: this.props.color,
            fontSize: 16,
            marginTop: 5,
          },
        }, this.props.text)])));

        if (_reactNative.Platform.OS === 'android')
          return spinner;

        return _reactNative2.default.createElement(_reactNative.Modal, {
          visible: this.props.visible,
          transparent: true
        }, spinner);
      }
    }, {
      key: 'render',
      value: function render() {
        return this._renderSpinner();
      }
    }
  ]);

  return Spinner;
}(_reactNative2.default.Component),
_class2.propTypes = {
  visible: _reactNative2.default.PropTypes.bool,
  color: _reactNative2.default.PropTypes.string,
  size: _reactNative2.default.PropTypes.oneOf(SIZES),
  overlayColor: _reactNative2.default.PropTypes.string
},
_class2.defaultProps = {
  visible: false,
  color: '#ff9800',
  size: 'large', // 'normal',
  overlayColor: 'rgba(0, 0, 0, 0.25)',
  floatColor: 'rgba(0, 0, 0, 0.45)'
},
_temp)) || _class;

exports.default = Spinner;;