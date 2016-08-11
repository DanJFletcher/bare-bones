<?php 
/**
 * Template: Header
 * 
 */
 
 // Requires go here.
 require('../env.php');
?>

<!DOCTYPE html>
<html lang="en">
    <head>
    	<title>Beard Pack</title>

        <!--META-->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- Reset CSS -->
        <link rel="stylesheet" href="<?php echo SITE_URL ?>/vendor/normalize-css/normalize.css" type="text/css" />
        
        <!-- CSS Libs/Frameworks -->
        <link rel="stylesheet" href="<?php echo SITE_URL ?>/vendor/bootstrap/bootstrap.min.css" type="text/css" />

        <!--CSS-->
        <link href="css/stylesheet.css" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">


    </head>

    <!--BODY-->
    <body>

    	<!--HEADER-->
        <header class="full">
            <div id="header-menuholder" class="full">
            	<div class="center">
                	<div id="header-logo">
                    	<a href="index.html" title="Home"><img src="images/logos/beard.png" alt="Beard"></a>
                  </div>

                  <div id="header-menu">
                  	<div class="header-menuitem">
                      	home
                      </div>
                  	<div class="header-menuitem">
                      	about
                      </div>
                  	<div class="header-menuitem">
                      	products
                      </div>
                  	<div class="header-menuitem">
                      	gallery
                      </div>
                  	<div class="header-menuitem">
                      	contact
                      </div>
                      <div class="clear"></div>
                  </div> <!-- end #header-menu -->
                  <div class="clear"></div>
              </div>
            </div>
        </header>