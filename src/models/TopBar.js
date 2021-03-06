import React from 'react';
import Grid from '@material-ui/core/Grid';
import ColorToggler from './ColorToggler';
import KanjiToggler from './KanjiToggler';
import VersionToggler from './VersionToggler';
import ModuleMenu from './ModuleMenu';
import HelpPopup from './HelpPopup';
export default function TopBar() {


  return (
    <Grid container justify="center">
      <Grid item>
        <HelpPopup> </HelpPopup>
      </Grid>
      <Grid item>
        <ModuleMenu> </ModuleMenu>
      </Grid>
      <Grid item>
        <VersionToggler> </VersionToggler>
      </Grid>
      <Grid item>
        <ColorToggler> </ColorToggler>
      </Grid>
      <Grid item>
        <KanjiToggler> </KanjiToggler>
      </Grid>
    </Grid>
  )

}
