const ffmpeg = require("ffmpeg");
// const Path = require("path");
// const Fs = require("fs");

class Converter {
  static convertVideoToAudio(req, res) {
    const file = "someVideoURLorPath";
    const audioDestination = "pathToBeStored";
    try {
      let process = new ffmpeg(file);
      process
        .then(
          function (video) {
            video.fnExtractSoundToMP3(audioDestination, function (error, file) {
              if (!error) console.log("Audio file: " + file);
            });
          },
          function (err) {
            console.log("Error: " + err);
          }
        )
        .catch((data) => console.log(err));
    } catch (err) {
      console.log(err.code);
      console.log(err.msg);
    }
  }
}

module.exports = Converter;
