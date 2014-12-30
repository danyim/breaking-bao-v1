'use strict';

angular.module('ngBao')
  .directive('scrollNavbar', function (AnchorSmoothScrollSvc) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/shared/directives/navbar.html',
      link: function(scope, elem, attrs) {

        scope.gotoElement = function (e) {
          AnchorSmoothScrollSvc.scrollTo(e);
        };

        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
        });


        // $('a.page-scroll').bind('click', function(event) {
        //   event.preventDefault();
        //   var $anchor = $(this);
        //   $('html, body').stop().animate({
        //     scrollTop: $($anchor.attr('href')).offset().top
        //   }, 1500, 'easeInOutExpo');
        // });

        /**
         * cbpAnimatedHeader.js v1.0.0
         * http://www.codrops.com
         *
         * Licensed under the MIT license.
         * http://www.opensource.org/licenses/mit-license.php
         *
         * Copyright 2013, Codrops
         * http://www.codrops.com
         */
        var cbpAnimatedHeader = (function() {

          var docElem = document.documentElement,
            header = document.querySelector( '.navbar-default' ),
            didScroll = false,
            changeHeaderOn = 300;

          function init() {
            window.addEventListener( 'scroll', function( event ) {
              if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
              }
            }, false );
          }

          function scrollPage() {
            var sy = scrollY();
            if ( sy >= changeHeaderOn ) {
              classie.add( header, 'navbar-shrink' );
            }
            else {
              classie.remove( header, 'navbar-shrink' );
            }
            didScroll = false;
          }

          function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
          }

          init();

        })();
      }
    };
  });
