/**
 * @package      YJSG Framework
 * @copyright    Copyright(C) since 2007  Youjoomla.com. All Rights Reserved.
 * @author       YouJoomla
 * @license      http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 * @websites     http://www.youjoomla.com | http://www.yjsimplegrid.com
 */
(function ($) {

    var YjsgShortcodes = {

        settings: {
           // inputelement: ""
        },

        initialize: function (options) {

            this.options = $.extend({}, this.settings, options);

            YjsgShortcodes.start();

        },
        start: function () {

            var self = this;
			
			$( '#editor-xtd-buttons' ).after('<div class="yjsg-shortcodes"><h3>'+jstr_shortcodes_title+'</h3></div>');
			
			$.each($.parseJSON(yjsg_shortcodes_plg), function (item, sc)
			{
				$( ".yjsg-shortcodes" ).append	(	'<a class="btn yjsg-shortcode-link"'
												+	' href="'+siteroot+'plugins/system/yjsg/includes/yjsgshortcodes/templates/'+sc["id"]+'.php"'
												+	' rel="{handler: \'iframe\', size: {x: '+sc["x"]+', y: '+sc["y"]+'}}">'
												+	' <i class="fa '+sc["icon"]+'"></i> '
												+	sc["name"]
												+	'</a>'
												);
			});
			
			if (typeof (SqueezeBox) != 'undefined') {
				SqueezeBox.close();
				SqueezeBox.initialize({});
				SqueezeBox.assign($$('a.yjsg-shortcode-link'), {
					parse: 'rel'
				});	
			}


        }


    }

    $(document).on('ready', YjsgShortcodes.initialize);

})(jQuery);