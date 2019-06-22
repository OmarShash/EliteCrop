/*global $, window*/
$(function () {
    
    'use strict';
    
    // Adjust slider height
    
    var windowHieght = $(window).height(),
        
        upperHeight = $('.upper-bar').innerHeight(),
        
        navbarHeight = $('.navbar').innerHeight();
    
    $('.slider, .carousel-item').height(windowHieght - (upperHeight + navbarHeight));
    
    // Featured Work Shuffle
    
    $('.featured-work ul li').on('click', function () {
        
        $(this).addClass('active').siblings().removeClass('active');
        
        if ($(this).data('class') === 'all') {
            
            $('.shuffle-image .col-md').css('opacity', 1);
            
        } else {
            
            $('.shuffle-image .col-md').css('opacity', '.08');
            
            $($(this).data('class')).parent().css('opacity', 1);
            
        }
        
    });
    
});