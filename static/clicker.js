"use strict";

// Total number of possible stations
const numStations = 664;

// Keeps track of the currently unlocked stations
const unlockedStations = [];

// Opens num stations
function openStation(numToOpen) {
	// Keep track of what we had before to know how many duplicates and new stations were opened
	const alreadyUnlocked = unlockedStations.length;
	// Unlock num random stations
	for (let i = 0; i < numToOpen; i++) {
		// Math.random() gives a number from 0-1, so multiply to get a number from 0-663
		const station = Math.floor(Math.random() * numStations);
		if (!unlockedStations.includes(station)) {
			unlockedStations.push(station);
		}
	}
	const newUnlocked = unlockedStations.length;
	// Number of duplicates = number of opens - number of unlocks
	const duplicates = alreadyUnlocked + numToOpen - newUnlocked;
	// Update unlock text
	const unlockedStatusDiv = document.getElementById("unlockstatus");
	unlockedStatusDiv.innerText =
		"Opened " + (newUnlocked - alreadyUnlocked) + " new stations and " + duplicates + " duplicates";
	// Show the unlock (hidden at first)
	unlockedStatusDiv.style.display = "block";
	// Update score
	document.getElementById("unlockedcount").innerText = unlockedStations.length;
	// If everything is opened then show victory
	if (unlockedStations.length == numStations) {
		document.getElementById("victory").style.display = "block";
	}
}
