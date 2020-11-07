import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function HelpPopup() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <HelpIcon></HelpIcon>
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div> cette appli est un brouillon de mes idées</div>
        <br></br>
        <div>il y'a trois mod selectionable avec des switch</div>
        <br></br>
        <div>le premier change entre questions de thème et de version</div>
        <br></br>
        <div>le deuxième active la coloration syntaxique, fonctionnel mais pas de données derrière à part pour les premières quéstions de version de la particule no</div>
        <br></br>
        <div>la toisième pour switcher entre le mode kanji et kana</div>
        <br></br>
        <div> vous pouvez survoller les block pour voir la signification du mot en kanji ou kana en fonction du mode</div>
        <br></br>
        <div> pour les réponses une coloration syntaxique aide à savoir si vous êtes sur la bonne piste</div>
        <br></br>
        <div>les réponses de thème sont attendus en kanji ou kana, pas de romaji encore.</div>
        <br></br>
        <bold>ATTENTION les données ont été mise à la main pour l'instant, il y'a probablement des erreurs </bold>
      </Popover>
    </div>
  );
}