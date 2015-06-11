﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;

    //SPLIT VIEW

    var Sample = window.Sample = {
       
        splitView: null,
            togglePane: WinJS.UI.eventHandler(function (ev) {
                if (Sample.splitView) {
                    Sample.splitView.paneHidden = !Sample.splitView.paneHidden;


                }
            }),
            trailClicked: WinJS.UI.eventHandler(function (ev) {

                //get the trail-id
                var trailId = ev.currentTarget.dataset.trailId;
                updateUI(allTrails[trailId]);
            }),
            homeClicked: WinJS.UI.eventHandler(function (ev) {
                //add remove tags
                document.body.classList.add("show-home");
                document.body.classList.remove("show-trail");

            }),
         
    };
    //END SPLIT VIEW

    var trailNameToID = {
        "Snoqualmie Falls Trail": 1,
        "Foster Island Trail": 2,
        "Alki Trail": 3
    }


    var allTrails = {
        0: {
            title: "Ranier Trail", averageRating: 3.5, location: "Seattle, WA", preview: "/images/p3.jpg", pictureArray: [
                { type: "item", title: "Majestic", picture: "/images/p3.jpg" }

            ], description: "This is the best trail to experience a glacier first hand. The trail follows the Carbon River through the forest to the snout of the glacier. Beware of rocks falling from the glacier snout. Do not approach the glacier -- enjoy the view from the constructed trail."
        },
        1: {
            title: "Snoqualmie Falls Trail", averageRating: 2, location: "Kirkland, WA", preview: "/images/Majestic.jpg", pictureArray: [
                { type: "item", title: "Majestic", picture: "/images/Majestic.jpg" },
                { type: "item", title: "Majestic", picture: "/images/Peaceful.jpg" }

            ], description: "Snoqualmie Falls is one of Washington state’s most popular scenic attractions. More than 1.5 million visitors come to the Falls every year. At the falls, you will find a two-acre park, gift shop, observation deck, the Salish Lodge and the famous 270 foot waterfall."
        },
        2: {
            title: "Foster Island Trail", averageRating: 4.5, location: "Bellevue, WA", preview: "/images/Lake.jpg", pictureArray: [
                 { type: "item", title: "Lake", picture: "/images/Lake.jpg" },
                 { type: "item", title: "Musical", picture: "/images/Musical.jpg" }

            ], description: "Foster Island Trail is a 2 mile loop trail located near Seattle, Washington that features a lake and is good for all skill levels. The trail offers a number of activity options and is accessible year-round."
        },
        3: {
            title: "Alki Trail", averageRating: 1.5, location: "Seattle, WA", preview: "/images/Cliche.jpg", pictureArray: [
                 { type: "item", title: "Cliche", picture: "/images/Cliche.jpg" }
            ], description: "The Alki Trail rides along the northern and eastern shore of West Seattle along Alki Avenue. Largely riding on a widened sidewalk, separated from traffic by a parking lane and curb, traffic on the trail is separated for bikes and walkers, providing a less stressful experience for walkers and bikers alike. "
        }

    }

    //FLIP VIEW
    var array = [
            { type: "item", picture: "/images/p3.jpg" }
    ];
    var bindingList = new WinJS.Binding.List(array);

    WinJS.Namespace.define("DefaultData", {
        bindingList: bindingList,
        array: array
    });

    // FLIP VIEW

    function updateUI(trail) {

        //add remove tags
        document.body.classList.add("show-trail");
        document.body.classList.remove("show-home");

        //update title
        var titleElt = document.body.querySelector(".trail-title");
        titleElt.textContent = trail.title;

        //update location
        var locationElt = document.body.querySelector(".trail-location");
        locationElt.textContent = trail.location;

        //update description
        var descriptionElt = document.body.querySelector(".trail-description");
        descriptionElt.textContent = trail.description;

        //update Flipview
        var flipViewElt = document.body.querySelector(".flipView");
        flipViewElt.winControl.itemDataSource = new WinJS.Binding.List(trail.pictureArray).dataSource;

        //update Rating
        var ratingElt = document.body.querySelector(".rating");
        ratingElt.winControl.averageRating = trail.averageRating;
        ratingElt.winControl.userRating = 0;
    }

    //LISTVIEW

        //create an array of trails to turn the allTrails object into an array
        var trailArray = [];

        //add each trail in the allTrails object into the trailArray
        for (var i = 0; i < 4; ++i) { 
            trailArray.push(allTrails[i]);
        }
           
        //create a binding list out of the trailArray we just created 
        var myList = window.myList = {
            data: new WinJS.Binding.List(trailArray)
        };
    //END LISTVIEW

    WinJS.UI.processAll().then(function () {

        Sample.splitView = document.querySelector(".splitView").winControl;
        new WinJS.UI._WinKeyboard(Sample.splitView.paneElement); // Temporary workaround: Draw keyboard focus visuals on NavBarCommands

    });



    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
        // You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
        // If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
    };

    app.start();
})();
