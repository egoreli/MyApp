// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;

    //SPLIT VIEW

    var mySplitView = window.mySplitView = {
       
        splitView: null,
            togglePane: WinJS.UI.eventHandler(function (ev) {
                if (mySplitView.splitView) {
                    mySplitView.splitView.paneOpened = !mySplitView.splitView.paneOpened;


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
    function onResize() {
        
        if (window.innerWidth < 480) { //small window
            mySplitView.splitView.openDisplayMode = WinJS.UI.SplitView.OpenedDisplayMode.overlay;
            mySplitView.splitView.closedDisplayMode = WinJS.UI.SplitView.ClosedDisplayMode.none;
            console.log("small");
        } else if (window.innerWidth < 720) { //medium windowc
            mySplitView.splitView.openDisplayMode = WinJS.UI.SplitView.OpenedDisplayMode.overlay;
            mySplitView.splitView.closedDisplayMode = WinJS.UI.SplitView.ClosedDisplayMode.inline;
            console.log("med");
        } else { //large window
            mySplitView.splitView.openDisplayMode = WinJS.UI.SplitView.OpenedDisplayMode.inline;
            mySplitView.splitView.closedDisplayMode = WinJS.UI.SplitView.ClosedDisplayMode.inline;
            console.log("large");
        }
        
    }
   
    //END SPLIT VIEW

    


    var allTrails = {
        
        0: {
            title: "Snoqualmie Falls Trail", averageRating: 2, location: "Kirkland, WA", preview: "images/Majestic.jpg", pictureArray: [
                { type: "item", title: "Majestic", picture: "images/Majestic.jpg" },
                { type: "item", title: "Majestic", picture: "images/Peaceful.jpg" }

            ], description: "Snoqualmie Falls is one of Washington state’s most popular scenic attractions. More than 1.5 million visitors come to the Falls every year. At the falls, you will find a two-acre park, gift shop, observation deck, the Salish Lodge and the famous 270 foot waterfall."
        },
        1: {
            title: "Foster Island Trail", averageRating: 4.5, location: "Bellevue, WA", preview: "images/Lake.jpg", pictureArray: [
                 { type: "item", title: "Lake", picture: "images/Lake.jpg" },
                 { type: "item", title: "Musical", picture: "images/Musical.jpg" }

            ], description: "Foster Island Trail is a 2 mile loop trail located near Seattle, Washington that features a lake and is good for all skill levels. The trail offers a number of activity options and is accessible year-round."
        },
        2: {
            title: "Alki Trail", averageRating: 1.5, location: "Seattle, WA", preview: "images/Cliche.jpg", pictureArray: [
                 { type: "item", title: "Cliche", picture: "images/Cliche.jpg" },
                 { type: "item", title: "Musical", picture: "images/Musical.jpg" }
            ], description: "The Alki Trail rides along the northern and eastern shore of West Seattle along Alki Avenue. Largely riding on a widened sidewalk, separated from traffic by a parking lane and curb, traffic on the trail is separated for bikes and walkers, providing a less stressful experience for walkers and bikers alike. "
        },
        3: {
            title: "Henok Trail", averageRating: 5, location: "Seattle, WA", preview: "images/Cliche.jpg", pictureArray: [
                 { type: "item", title: "Cliche", picture: "images/Cliche.jpg" },
                 { type: "item", title: "Musical", picture: "images/Musical.jpg" }
            ], description: "The Henok Trail rides along the northern and eastern shore of West Seattle along Alki Avenue. Largely riding on a widened sidewalk, separated from traffic by a parking lane and curb, traffic on the trail is separated for bikes and walkers, providing a less stressful experience for walkers and bikers alike. "
        },
        4: {
            title: "Liz Trail", averageRating: 3.6, location: "Seattle, WA", preview: "images/Cliche.jpg", pictureArray: [
                 { type: "item", title: "Cliche", picture: "images/Cliche.jpg" },
                 { type: "item", title: "Musical", picture: "images/Musical.jpg" }
            ], description: "The Henok Trail rides along the northern and eastern shore of West Seattle along Alki Avenue. Largely riding on a widened sidewalk, separated from traffic by a parking lane and curb, traffic on the trail is separated for bikes and walkers, providing a less stressful experience for walkers and bikers alike. "
        },
        5: {
            title: "Kirn Trail", averageRating: .3, location: "Seattle, WA", preview: "images/Cliche.jpg", pictureArray: [
                 { type: "item", title: "Cliche", picture: "images/Cliche.jpg" },
                 { type: "item", title: "Musical", picture: "images/Musical.jpg" }
            ], description: "The Henok Trail rides along the northern and eastern shore of West Seattle along Alki Avenue. Largely riding on a widened sidewalk, separated from traffic by a parking lane and curb, traffic on the trail is separated for bikes and walkers, providing a less stressful experience for walkers and bikers alike. "
        },
        6: {
            title: "Mike Trail", averageRating: 4.7, location: "Seattle, WA", preview: "images/Cliche.jpg", pictureArray: [
                 { type: "item", title: "Cliche", picture: "images/Cliche.jpg" },
                 { type: "item", title: "Musical", picture: "images/Musical.jpg" }
            ], description: "The Henok Trail rides along the northern and eastern shore of West Seattle along Alki Avenue. Largely riding on a widened sidewalk, separated from traffic by a parking lane and curb, traffic on the trail is separated for bikes and walkers, providing a less stressful experience for walkers and bikers alike. "
        },
        7: {
            title: "Jesse Trail", averageRating: 4, location: "Seattle, WA", preview: "images/Cliche.jpg", pictureArray: [
                 { type: "item", title: "Cliche", picture: "images/Cliche.jpg" },
                 { type: "item", title: "Musical", picture: "images/Musical.jpg" }
            ], description: "The Henok Trail rides along the northern and eastern shore of West Seattle along Alki Avenue. Largely riding on a widened sidewalk, separated from traffic by a parking lane and curb, traffic on the trail is separated for bikes and walkers, providing a less stressful experience for walkers and bikers alike. "
        }

    }

    //FLIP VIEW
    var array = [
            { type: "item", picture: "images/p3.jpg" }
    ];
    var bindingList = new WinJS.Binding.List(array);


    var DefaultData = window.DefaultData = {
        bindingList: bindingList,
        array: array
    }

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

    var trailNameToID = {
        "Snoqualmie Falls Trail": 0,
        "Foster Island Trail": 1,
        "Alki Trail": 2,
        "Henok Trail": 3,
        "Kirn Trail": 4,
        "Liz Trail": 5,
        "Mike Trail": 6,
        "Jesse Trail": 7
    }

    


    //Binding Lists
        //create an array of trails to turn the allTrails object into an array
        var trailArray = [];

        //add each trail in the allTrails object into the trailArray
        for (var i = 0; i < 7 ; ++i) { 
            trailArray.push(allTrails[i]);
        }
           
        //create a binding list out of the trailArray we just created 
        var myList = window.myList = {
            data: new WinJS.Binding.List(trailArray)
        };

    //END Binding Lists

    //Projections
        function alpha(first, second) {
            if ((first.title).localeCompare(second.title) == 0)
                return 0;
            else if ((first.title).localeCompare(second.title) == 1)
                 return 1;
            else
                 return -1;
        }
        function descendCompare(first, second) {
            if (first.averageRating == second.averageRating)
                return 0;
            else if (first.averageRating < second.averageRating)
                 return 1;
            else
                 return -1;
        }
        var sortedList = myList.data.createSorted(descendCompare);
        var alphabeticalList = myList.data.createSorted(alpha);

        myList.sortedList = sortedList;
        myList.alphabeticalList = alphabeticalList;
    //End Projections


    //processAll
    WinJS.UI.processAll().then(function () {
        mySplitView.splitView = document.querySelector(".splitView").winControl;
        new WinJS.UI._WinKeyboard(mySplitView.splitView.paneElement);
        //makes the splitView adaptable to screen size
        window.addEventListener("resize", onResize );


        

        //allows listview to navigate on click
        var listView = document.getElementById("listView").winControl;
        listView.oniteminvoked = function (ev) {
            ev.detail.itemPromise.then(function (item) {
                var title = item.data.title;
                var trailId = trailNameToID[title];
                updateUI(allTrails[trailId]);
            })
        }
        
    });

    app.start();
})();
