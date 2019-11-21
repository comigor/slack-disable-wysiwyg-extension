function disableBadEditor() {
  let REMOVED_BAD_EDITOR = false;
  try {
    const teamId = window.slackDebug.activeTeamId;
    const redux = window.slackDebug[teamId].redux;
    const experiments = redux.getState().experiments;
    const filteredExperiments = {};

    for (const key in experiments) {
      if (!key.includes('wysiwyg')) {
        filteredExperiments[key] = experiments[key];
      } else {
        REMOVED_BAD_EDITOR = true;
      }
    }

    redux.dispatch({
      type: '[19] Bulk add experiment assignments to redux',
      payload: filteredExperiments
    });

    if (REMOVED_BAD_EDITOR) {
      console.log('Bad editor disabled successfully!');
      return;
    }
  } catch (e) { }

  console.log('Will try again later');
  setTimeout(disableBadEditor, 1000);
}

setTimeout(disableBadEditor, 1000);
