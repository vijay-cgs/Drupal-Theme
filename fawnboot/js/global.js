/**
 * @file
 * Global JavaScript for FawnBoot.
 */

(function (Drupal, once) {
  'use strict';

  Drupal.behaviors.fawnboot = {
    attach(context) {
      once('fawnboot', 'body', context).forEach((element) => {
        // Add page initialization here. It runs once per matching element.
        // For AJAX content, target its elements instead of the body.
      });
    },
  };
})(Drupal, once);
