<?php
/**
 * @package      YJSG Framework
 * @copyright    Copyright(C) since 2007  Youjoomla.com. All Rights Reserved.
 * @author       YouJoomla
 * @license      http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 * @websites     http://www.youjoomla.com | http://www.yjsimplegrid.com
 */
define( '_JEXEC', 1 ); 
$get_file_info  = pathinfo(__FILE__);
$jpath = preg_replace('/(\btemplates\b|\bmodules\b|\bcomponents\b|\bplugins\b)(.*)/','',$get_file_info['dirname']);

define('JPATH_BASE',rtrim($jpath,DIRECTORY_SEPARATOR));

require_once ( JPATH_BASE .DIRECTORY_SEPARATOR.'includes'.DIRECTORY_SEPARATOR.'defines.php' );
require_once ( JPATH_BASE .DIRECTORY_SEPARATOR.'includes'.DIRECTORY_SEPARATOR.'framework.php' );

jimport('joomla.filesystem.file');
jimport('joomla.filesystem.folder');
jimport('joomla.plugin.helper');
jimport('joomla.session.session');

// Attention: is reading site language. backend language could be other
// since shortcodes are available in frontend (edit) and backend
// it really should detect which site type is the user using
// if you change the sitetype var from 'site' to 'administrator'
// it will read the admin site language.
// but how to detect if user is using backend or frontend?
// Also and if the user have 2 or more languages on frontend, what language will it choose?
$sitetype='site';
$mainframe 				= JFactory::getApplication($sitetype);
$mainframe->initialise();
if (intval(JVERSION) >= 3) {
	JPluginHelper::importPlugin('system','yjsg');
}
$session 				= JFactory::getSession();
$user 					= JFactory::getUser();
$language				= JFactory::getLanguage();
$base_link				= preg_replace('/(\btemplates\b|\bmodules\b|\bcomponents\b|\bplugins\b)(.*)/','',JURI::root());

print_r($mainframe);

$language->setLanguage(JComponentHelper::getParams('com_languages')->get($sitetype));
// Sometimes it needed to be forced after changing the language or will appear in english
$language->load('joomla', JPATH_ADMINISTRATOR);
$language->load('plg_system_yjsg', JPATH_ADMINISTRATOR);
// Should also read the template language files
$language->load('tpl_'.Yjsg::getDefaultTemplate(), JPATH_SITE);
