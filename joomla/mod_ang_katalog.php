<?php
defined('_JEXEC') or die;

require_once dirname(__FILE__) . '/helper.php';

$launch = modAngKatalog::getData();
require JModuleHelper::getLayoutPath('mod_ang_katalog');

?>