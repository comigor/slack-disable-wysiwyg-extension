function disableBadEditor() {
  try {
    const redux = slackDebug[slackDebug.activeTeamId].redux;
    const { wysiwyg_composer, wysiwyg_composer_ios, wysiwyg_composer_webapp, ...payload } = redux.getState().experiments;
    redux.dispatch({ type: '[19] Bulk add experiment assignments to redux', payload });

    if (wysiwyg_composer_webapp) {
      console.log('Bad editor disabled successfully!');
      return;
    }
  } catch (e) { }

  console.log('Will try again later');
  setTimeout(disableBadEditor, 1000);
}

setTimeout(disableBadEditor, 1000);
