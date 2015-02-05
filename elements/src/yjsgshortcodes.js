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
			var yjsg_scs=$.parseJSON(yjsgshortcodesitems);
			for (var sc in yjsg_scs)
			{
				var yjsgshortcodelink = '<a class="btn yjsg-shortcode-link"';
				if (yjsg_scs[sc]["type"]=='plugin') yjsgshortcodelink += ' href="'+siteroot+'plugins/system/yjsg/includes/yjsgshortcodes/templates/'+yjsg_scs[sc]["id"]+'.php"';
				else yjsgshortcodelink += ' href="'+siteroot+'templates/'+sitetemplate+'/custom/yjsgshortcodes/templates/'+yjsg_scs[sc]["id"]+'.php"';
				yjsgshortcodelink += ' rel="{handler: \'iframe\', size: {x: '+yjsg_scs[sc]["x"]+', y: '+yjsg_scs[sc]["y"]+'}}">';
				yjsgshortcodelink += ' <i class="fa '+yjsg_scs[sc]["icon"]+'"></i> ';
				yjsgshortcodelink += yjsg_scs[sc]["name"];
				yjsgshortcodelink += ' </a>';
				$( ".yjsg-shortcodes" ).append( yjsgshortcodelink );
			}
			
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