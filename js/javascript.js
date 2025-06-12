function setupShowreel(videoElementId, videoSources) {
  const videoPlayer = document.getElementById(videoElementId);
  let currentIndex = 0;

  // Load the first video
  videoPlayer.src = videoSources[currentIndex];
  videoPlayer.play();

  // When video ends, play the next one (looping)
  videoPlayer.addEventListener('ended', () => {
    currentIndex = (currentIndex + 1) % videoSources.length;
    videoPlayer.src = videoSources[currentIndex];
    videoPlayer.play();
  });
}

// Set up Mograph 16x9 showreel
setupShowreel('mograph16x9showreel', [
"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-08_SexEducation_02.mp4",
"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_24-02_DesignOf007_01.mp4",
"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_24-06_NBCIW_01.mp4",
"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_24-03_StudioCanal_02.mp4",
"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_24-03_StudioCanal_01.mp4",
"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_24-03_PDFTC_01.mp4",
"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_23-08_SIOS_01.mp4",
"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_23-08_OutComeTheWolves_01.mp4",
"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_23-04_TIM_01.mp4",
"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-09_NoWayUp_01.mp4",
"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-08_SexEducation_03.mp4",
"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-08_SexEducation_01.mp4",
"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-08_Quicksand_01.mp4",
"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-07_Sentinel_01.mp4",
"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-07_Christies_01.mp4",
"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-05_Till_01.mp4",
"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-03_Gofilex_01.mp4",
]);

// Set up Mograph 1x1 showreel
setupShowreel('mograph1x1showreel', [
"ShowreelClips/Mograph/1x1/Shwrl_M_1x1_24-12_ImStillHere_01.mp4",
"ShowreelClips/Mograph/1x1/Shwrl_M_1x1_24-06_NBCIW_01.mp4",
"ShowreelClips/Mograph/1x1/Shwrl_M_1x1_22-01_OperationFortune_01.mp4",
"ShowreelClips/Mograph/1x1/Shwrl_M_1x1_23-02_ATownCalledMalice_01.mp4",
"ShowreelClips/Mograph/1x1/Shwrl_M_1x1_22-09_AQOTWS_02.mp4",
"ShowreelClips/Mograph/1x1/Shwrl_M_1x1_22-09_AQOTWS_01.mp4",
]);

// Set up Mograph 4x5 showreel
setupShowreel('mograph4x5showreel', [
"ShowreelClips/Mograph/4x5/Shwrl_M_4x5_23-07_NoHardFeelings_01.mp4",
"ShowreelClips/Mograph/4x5/Shwrl_M_4x5_22-04_Minions_01.mp4",
"ShowreelClips/Mograph/4x5/Shwrl_M_4x5_00-00_Retribution_01.mp4",
"ShowreelClips/Mograph/4x5/Shwrl_M_4x5_00-00_Respect_01.mp4",
"ShowreelClips/Mograph/4x5/Shwrl_M_4x5_00-00_PussInBoots_01.mp4",
"ShowreelClips/Mograph/4x5/Shwrl_M_4x5_00-00_TheCrown_01.mp4",
]);

// Set up Mograph 9x16 showreel
setupShowreel('mograph9x16showreel', [
"ShowreelClips/Mograph/9x16/Shwrl_M_9x16_22-02_Bridgerton_01.mp4",
"ShowreelClips/Mograph/9x16/Shwrl_M_9x16_22-05_Persuasion_01.mp4",
"ShowreelClips/Mograph/9x16/Shwrl_M_9x16_00-00_Candyman_01.mp4",
]);

// Set up VFX showreel
setupShowreel('vfx16x9showreel', [
		"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_24-06_NBCIW_01.mp4",
		"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_24-03_StudioCanal_02.mp4",
		"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_24-03_StudioCanal_01.mp4",
		"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_24-03_PDFTC_01.mp4",
		"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_24-02_DesignOf007_01.mp4",
		"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_23-08_SIOS_01.mp4",
		"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_23-08_OutComeTheWolves_01.mp4",
		"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_23-04_TIM_01.mp4",
		"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-09_NoWayUp_01.mp4",
		"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-08_SexEducation_03.mp4",
		"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-08_SexEducation_02.mp4",
		"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-08_SexEducation_01.mp4",
		"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-08_Quicksand_01.mp4",
		"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-07_Sentinel_01.mp4",
		"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-07_Christies_01.mp4",
		"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-05_Till_01.mp4",
		"ShowreelClips/Mograph/16x9/Shwrl_M_16x9_22-03_Gofilex_01.mp4"
]);