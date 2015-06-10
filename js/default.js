// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    //FIRST SPLIT VIEW
    WinJS.Namespace.define("Sample", {
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
           
        })

    });
    //END FIRST SPLIT VIEW

    var trailNameToID = {
        "Snoqualmie Falls Trail": 1,
        "Foster Island Trail": 2,
        "Alki Trail": 3
    }


    var allTrails = {
        0: {
            title: "Ranier Trail", averageRating: 3.5, location: "Seattle, WA" ,  pictureArray: [
                { type: "item", title: "Majestic", picture: "/images/p3.jpg" }
          
            ], description: "This is the best trail to experience a glacier first hand. The trail follows the Carbon River through the forest to the snout of the glacier. Beware of rocks falling from the glacier snout. Do not approach the glacier -- enjoy the view from the constructed trail."
        },
        1: {
            title: "Snoqualmie Falls Trail", averageRating: 2, location: "Kirkland, WA", pictureArray: [
                { type: "item", title: "Majestic", picture: "/images/Majestic.jpg" },
                { type: "item", title: "Majestic", picture: "/images/Peaceful.jpg" }
              
            ], description: "Snoqualmie Falls is one of Washington state’s most popular scenic attractions. More than 1.5 million visitors come to the Falls every year. At the falls, you will find a two-acre park, gift shop, observation deck, the Salish Lodge and the famous 270 foot waterfall."
        },
        2: {
            title: "Foster Island Trail", averageRating: 4.5, location: "Bellevue, WA", pictureArray: [
                 { type: "item", title: "Lake", picture: "/images/Lake.jpg" },
                 { type: "item", title: "Musical", picture: "/images/Musical.jpg" }
             
            ], description: "Foster Island Trail is a 2 mile loop trail located near Seattle, Washington that features a lake and is good for all skill levels. The trail offers a number of activity options and is accessible year-round."
        },
        3: {
            title: "Alki Trail", averageRating: 1.5, location: "Seattle, WA", pictureArray: [
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

    

    //RATING
	function changeRating(ev) {
	    return;
	    var obj = ev.target.winControl;
	    if (obj) {
	        output("Rating changed. User rating: " + obj.userRating + "<br/>");
	        if (obj.userRating !== 0) {
	            // put your code here to save user rating and re-calculate average rating.
	        } else {
	            // put your code here to delete user rating.
	        }
	    }
	}

	WinJS.Namespace.define("basics", { changeRating: changeRating });

    // To protect against untrusted code execution, all functions are required to be marked as supported for processing before they can be used inside a data-win-options attribute in HTML markup.
	WinJS.Utilities.markSupportedForProcessing(changeRating);

	function output(s) {
	    document.getElementById("messageElement").innerHTML += s;
	}
    //END RATING

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

	app.onactivated = function (args) {
		if (args.detail.kind === activation.ActivationKind.launch) {
			if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
				// TODO: This application has been newly launched. Initialize your application here.
			} else {
				// TODO: This application has been reactivated from suspension.
				// Restore application state here.
			}



			args.setPromise(WinJS.UI.processAll().then(function () {

			    // SEARCH BOX
			    var statusEl = document.getElementById("status");
			    var suggestionList = ["Snoqualmie Falls Trail", "Foster Island Trail", "Alki Trail"];

			    function suggestionsRequestedHandler(eventObject) {
			        var queryText = eventObject.detail.queryText,
                    query = queryText.toLowerCase(),
                    suggestionCollection = eventObject.detail.searchSuggestionCollection;
			        if (queryText.length > 0) {
			            for (var i = 0, len = suggestionList.length; i < len; i++) {
			                if (suggestionList[i].substr(0, query.length).toLowerCase() === query) {
			                    suggestionCollection.appendQuerySuggestion(suggestionList[i]);
			                }
			            }
			        }
			    }

			    function querySubmittedHandler(eventObject) {


			        var queryText = eventObject.detail.queryText;
			        WinJS.log && WinJS.log(queryText, "sample", "status");
			        updateUI(allTrails[trailNameToID[eventObject.detail.queryText]]);
			    }

			    var searchBox = document.getElementById("search-box");
			    var asbC = new WinJS.UI.AutoSuggestBox(searchBox);
			    asbC.placeholderText = "Type a trail";
			    asbC.searchHistoryDisabled = "true";
			    searchBox.addEventListener("suggestionsrequested", suggestionsRequestedHandler);
			    searchBox.addEventListener("querysubmitted", querySubmittedHandler);
                //END SEARCH BOX
			    //LIKE ANIMATION
			    var target1 = document.getElementById("like-button");

			    function onPointerDown(evt) {
			        WinJS.UI.Animation.pointerDown(evt.target);
			        evt.preventDefault();
			    }

			    function onPointerUp(evt) {
			        WinJS.UI.Animation.pointerUp(evt.target);
			        evt.preventDefault();
			    }

			    function addPointerDownHandlers(target) {
			        target.addEventListener("pointerdown", onPointerDown, false);
			        target.addEventListener("touchstart", onPointerDown, false);
			        target.addEventListener("mousedown", onPointerDown, false);
			    }

			    function addPointerUpHandlers(target) {
			        target.addEventListener("pointerup", onPointerUp, false);
			        target.addEventListener("touchend", onPointerUp, false);
			        target.addEventListener("mouseup", onPointerUp, false);
			    }
			    addPointerDownHandlers(target1);
			    addPointerUpHandlers(target1);
                //END LIKE ANIMATION

			    ////DECSRIPTION ANIMATION
			    var runAnimation = document.getElementById("runAnimation");
			    var contentArea = document.getElementById("description-content");
			    var content = document.querySelector(".trail-description");

			    function runEnterContentAnimation() {
			        if (runAnimation.innerHTML === "Hide Description") {
			            contentArea.style.opacity = "0";
			            runAnimation.innerHTML = "Show Description";
			        } else {
			            content.style.overflow = "hidden";

			            // Run the enterContent animation
			            // The animation will cause opacity to transition to 1
			            // Use the recommended offset by leaving the offset argument empty to get the best performance
			            WinJS.UI.Animation.enterContent(contentArea, null).done(
                            function () {
                                content.style.overflow = "auto";
                            });

			            runAnimation.innerHTML = "Hide Description";
			        }
			    }

			    contentArea.style.opacity = "0";
			    runAnimation.addEventListener("click", runEnterContentAnimation, false);
			    ////END DESCRIPTION ANIMATION

			    Sample.splitView = document.querySelector(".splitView").winControl;
			    new WinJS.UI._WinKeyboard(Sample.splitView.paneElement); // Temporary workaround: Draw keyboard focus visuals on NavBarCommands
			    
			}));
           

		}
	};

    

	app.oncheckpoint = function (args) {
		// TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
		// You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
		// If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
	};

	app.start();
})();

