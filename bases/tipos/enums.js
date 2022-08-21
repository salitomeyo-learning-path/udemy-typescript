"use strict";
(function () {
    // enum audioLevel {
    //     min,
    //     medium,
    //     max
    // }
    var audioLevel;
    (function (audioLevel) {
        audioLevel[audioLevel["min"] = 1] = "min";
        audioLevel[audioLevel["medium"] = 2] = "medium";
        audioLevel[audioLevel["max"] = 20] = "max";
    })(audioLevel || (audioLevel = {}));
    var currentAudio = audioLevel.medium;
    console.log(currentAudio);
    currentAudio = audioLevel.max;
    console.log(currentAudio);
    console.log(audioLevel);
})();
