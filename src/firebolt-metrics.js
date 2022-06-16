import { Metrics, Discovery } from "@firebolt-js/sdk";


////////////////// ESSENTIAL ACTIONS //////////////////

/**
 * To be invoked once sign-in has occurred
 */
export const fireBoltSignIn = userId => {
  Discovery.signIn({ userId })
    .then(success => {
      console.log("1413 :: fireBoltSignIn ", success);
    })
    .catch(e => {
      console.log("1413 :: fireBoltSignIn Error: ", e);
      return e;
    });
};

/**
 * To be invoked when the application is signed out
 * @param {string} userId
 */
export const fireBoltSignOut = userId => {
  Discovery.signIn({ userId })
    .then(success => {
      console.log("1413 :: fireBoltSignOut ", success);
    })
    .catch(e => {
      console.log("1413 :: fireBoltSignOut Error: ", e);
      return e;
    });
};

export const ready = async () => { };
/**
 * To be invoked on navigating to a new Page.
 * @param {pageId} entityId string

 */
export const fireBoltPage = pageId => {
  Metrics.page(pageId)
    .then(success => {
      console.log("1413 :: fireBoltPage ", pageId, " : ", success);
    })
    .catch(e => {
      console.log("1413 :: fireBoltPage Error: ", e);
      return e;
    });
  return pageId;
};

export const error = async () => { };

export const action = async () => { };

////////////////// MEDIA PLAYER EVENTS //////////////////

/**
 * Dispatches the 'id' of the video, as passed from Sonic.
 * To be invoked when video content actually commences playing.
 * @param {string} entityId string
 */
export const fireBoltMediaStartContent = entityId => {
  Metrics.startContent(entityId)
    .then(success => {
      console.log("fireBoltStartContent ", success);
      return success;
    })
    .catch(e => {
      console.log("fireBoltStartContent Error: ", e);
      return e;
    });
};

/**
 * Dispatches the 'id' of the video, as passed from Sonic.
 * To be invoked when video content is actively stopped by the user, 
 * not when the video finishes playing having reached the end.
 * @param {string} entityId string
 */
export const fireBoltMediaStopContent = entityId => {
  Metrics.stopContent(entityId)
    .then(success => {
      console.log("fireBoltStopContent ", success);
      return success;
    })
    .catch(e => {
      console.log("fireBoltStopContent Error: ", e);
      return e;
    });
};

/**
 * Dispatches the 'id' of the video, as passed from Sonic.
 * To be invoked when video content currently playing reaches the end.
 * @param {string} entityId string
 */
export const fireBoltMediaEnded = entityId => {
  Metrics.mediaEnded(entityId)
    .then(success => {
      console.log("fireBoltMediaEnded ", success);
      return success;
    })
    .catch(e => {
      console.log("fireBoltMediaEnded Error: ", e);
      return e;
    });
};

/**
 * Dispatches the 'id' of the video, as passed from Sonic.
 * To be invoked when video content commences loading.
 * @param {string} entityId string
 */
export const fireBoltMediaLoadStart = entityId => {
  Metrics.mediaLoadStart({ entityId })
    .then(success => {
      console.log("1413 :: fireBoltMediaLoadStart ", success);
      return success;
    })
    .catch(e => {
      console.log("1413 :: fireBoltMediaLoadStart Error: ", e);
      return e;
    });
};

/**
 * Dispatches the 'id' of the video, as passed from Sonic.
 * To be invoked when video content currently playing is actively paused by the user.
 * @param {string} entityId string
 */
export const fireBoltMediaPause = entityId => {
  Metrics.mediaPause({ entityId })
    .then(success => {
      console.log(
        "1413 :: fireBoltMediaPause ",
        success,
        " entityId ",
        entityId
      );
      return success;
    })
    .catch(e => {
      console.log("1413 :: fireBoltMediaPause Error: ", e);
      return e;
    });
};
/**
 *
 * @param {string} entityId
 */
export const fireBoltMediaPlay = entityId => {
  Metrics.mediaPlay({ entityId })
    .then(success => {
      console.log(
        "1413 :: fireBoltMediaPlay ",
        success,
        " entityId ",
        entityId
      );
      return success;
    })
    .catch(e => {
      console.log("1413 :: fireBoltMediaPlay Error: ", e);
      return e;
    });
};

export const fireBoltMediaPlaying = entityId => {
  Metrics.mediaPlaying({ entityId })
    .then(success => {
      console.log(
        "1413 :: fireBoltMediaPlaying ",
        success,
        " entityId ",
        entityId
      );
      return success;
    })
    .catch(e => {
      console.log("1413 :: fireBoltMediaPlaying Error: ", e);
      return e;
    });
};

export const fireBoltMediaProgress = (entityId, position) => {
  Metrics.mediaPlaying({ entityId, position })
    .then(success => {
      // console.log(
      //   "1413 :: fireBoltMediaProgress ",
      //   success,
      //   " entityId ",
      //   entityId,
      //   " position: ",
      //   position
      // );
      return success;
    })
    .catch(e => {
      console.log("1413 :: fireBoltMediaProgress Error: ", e);
      return e;
    });
};
export const fireBoltMediaRateChange = (entityId, rate) => {
  Metrics.mediaRateChange({ entityId, rate })
    .then(success => {
      console.log(
        "1413 :: fireBoltMediaRateChange ",
        success,
        " entityId ",
        entityId,
        " rate: ",
        rate
      );
      return success;
    })
    .catch(e => {
      console.log("1413 :: fireBoltMediaRateChange Error: ", e);
      return e;
    });
};

export const fireBoltMediaRenditionChange = entityId => {
  // Unclear as to what rendition change means.
  // left for possible future implementation
  return entityId;
};
/**
 * The video player has commenced seeking a time-code, in milliseconds,
 * to advance or rewind the video to.
 * target: a decimal percentage (0-0.999) for content with a known duration,
 * or an integer number of seconds (0-86400) for content with an unknown duration
 * @param {string} entityId
 * @param {string} target
 */
export const fireBoltMediaSeeking = async (entityId, target) => {
  Metrics.mediaSeeking({ entityId, target })
    .then(success => {
      console.log(
        "1413 :: fireBoltMediaSeeking ",
        success,
        " entityId ",
        entityId
      );
      return success;
    })
    .catch(e => {
      console.log("1413 :: fireBoltMediaSeeking Error: ", e);
      return e;
    });
};

/**
 * The video player has completed seeking a time-code, in milliseconds,
 * to advance or rewind the video to and has commenced playing.
 * target: a decimal percentage (0-0.999) for content with a known duration,
 * or an integer number of seconds (0-86400) for content with an unknown duration
 * @param {string} entityId
 * @param {string} target
 */
export const fireBoltMediaSeeked = async (entityId, position) => {
  Metrics.mediaPlaying({ entityId, position })
    .then(success => {
      console.log(
        "1413 :: fireBoltMediaSeeked ",
        success,
        " entityId ",
        entityId,
        " position: ",
        position
      );
      return success;
    })
    .catch(e => {
      console.log("1413 :: fireBoltMediaSeeked Error: ", e);
      return e;
    });
};

/**
 * Currently unused.
 * Metrics.mediaWaiting's purpose requires clarification.
 * @param {string} entityId
 * @returns
 */
export const fireBoltMediaWaiting = async entityId => {
  Metrics.mediaWaiting({ entityId })
    .then(success => {
      console.log(
        "1413 :: fireBoltMediaWaiting ",
        success,
        " entityId ",
        entityId
      );
      return success;
    })
    .catch(e => {
      console.log("1413 :: fireBoltMediaWaiting Error: ", e);
      return e;
    });
};

/*


      {
          attributes: {
              "alternateId": "allies-vs-nazis-2213295",
              "audioTracks": [],
              "availabilityWindows": [],
              "broadcastType": "REPLAY",
              "clearkeyEnabled": false,
              "contentDescriptors": [],
              "contentRatings": [],
              "customAttributes": {
                  "listingEpisodeNumber": "5",
                  "listingSeasonNumber": "1",
                  "listingShowName": "Combat Dealers: Reloaded"
              },
              "description": "Bruce searches land, sea and skies in a mission to settle the score on whether the Allies or the Nazis were truly the most advanced side of the Second World War.",
              "drmEnabled": false,
              "geoRestrictions": {
                  "countries": [
                      "world"
                  ],
                  "mode": "permit"
              },
              "identifiers": {
                  "adInventoryId": "dplus_uk.cep.220424004002619",
                  "analyticsId": "vdp-37128068_dplus_uk_tvlisting",
                  "epgId": "vdp-37128068_dplus_uk",
                  "freewheel": "dplus_uk.cep.220424004002619",
                  "originalMediaId": "vdp-37128068_dplus_uk"
              },
              "isFavorite": false,
              "name": "Allies Vs Nazis",
              "offlineViewingAllowed": false,
              "packages": [],
              "playbackAllowed": false,
              "rights": {
                  "embeddable": false
              },
              "scheduleEnd": "2022-05-16T02:00:00Z",
              "scheduleStart": "2022-05-16T01:00:00Z",
              "sourceSystemId": "vdp-37128068_dplus_uk_tvlisting",
              "sourceSystemName": "vdp",
              "subtitles": [],
              "videoType": "LISTING",
              "viewingHistory": {
                  "viewed": false
              }
          },
          "id": "2213295",
          "relationships": {
              "contentPackages": {
                  "data": []
              },
              "primaryChannel": {
                  "data": {
                      "id": "265",
                      "type": "channel"
                  }
              },
              "txCategory": {
                  "data": [
                      {
                          "id": "51142743-6d8b-489f-9f9c-c0e88be27449",
                          "type": "taxonomyNode"
                      }
                  ]
              }
          },
          "type": "video"
      },

*/
