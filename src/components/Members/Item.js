import React, {useState} from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "./ItemStyles";
import {
  DescriptionContainer,
  DetailsConatiner,
  DetailsBottomConatainer,
  DetailsTopConatainer,
  ItemHeader,
  LeftItemHeader,
} from "./components";
import CreateItemDialog from "./CreateItemDialog";
import ConfirmationDialog from "../Base/ConfirmationDialog";

export default function Item({
  item,
  store,
  parent,
  updateCatalogItem,
}) {
  const classes = useStyles();
  const [createCatalogItemOpen, setCreateCatalogItemOpen] = useState(false);
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const {id, outOfStock} = item;

  const dialogHeaderTitle = "Update Item";
  const buttonName = "Update Item";
  const confirmationDialogTitle = "Are you sure you want to update the item stock status?";
  const confirmationDialogContent = "This will be reflected in the live menus, buyers will be able to select an item only if it is in stock";

  const handleCreateCatalogItemDialogOpen = () => {
    setCreateCatalogItemOpen(true);
  };

  const handleCreateCatalogItemDialogClose = () => {
    setCreateCatalogItemOpen(false);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  const handleConfirmationDialogOpen = () => {
    setConfirmationDialogOpen(true);
  };

  const handleConfirmationDialogClose = () => {
    setConfirmationDialogOpen(false);
  };

  const handleConfirmation = () => {
    updateCatalogItem(id, {outOfStock: !outOfStock});
    setConfirmationDialogOpen(false);
  };

  const handleOutOfStockToggle = () => {
    handleConfirmationDialogOpen();
  };


  return (
    <div className={classes.root}>
      <ExpansionPanel
	className={classes.expanded}
	expanded={expanded}
	onChange={() => setExpanded(!expanded)}
      >
	<ExpansionPanelSummary
	  expandIcon={<ExpandMoreIcon />}
	  aria-controls="panel1a-content"
	  id="panel1a-header"
	  className={classes.summary}
	>
	  <ItemHeader>
	    <LeftItemHeader>
	      <Typography className={classes.heading}>{item.name}</Typography>
	    </LeftItemHeader>
	    <div>
	      <Typography
		className={classes.heading}
	      >foo</Typography>
	    </div>
	  </ItemHeader>
	</ExpansionPanelSummary>
	<ExpansionPanelDetails className={classes.description}>
	  <DetailsConatiner>
	    <DetailsTopConatainer>
	      <DescriptionContainer>
		<Typography>
		  {item.description}
		</Typography>
	      </DescriptionContainer>
	    </DetailsTopConatainer>
	    <DetailsBottomConatainer>
	      <Button
		size="small"
		variant="outlined"
		color="primary"
		// onClick={handleDialogOpen}
		onClick={handleCreateCatalogItemDialogOpen}
	      >Archive</Button>
	      <Button
		size="small"
		variant="outlined"
		color="primary"
		// onClick={handleDialogOpen}
		onClick={handleCreateCatalogItemDialogOpen}
	      >Update</Button>
	    </DetailsBottomConatainer>
	  </DetailsConatiner>
	</ExpansionPanelDetails>
      </ExpansionPanel>
      <CreateItemDialog
	open={createCatalogItemOpen}
	handleClose={handleCreateCatalogItemDialogClose}
	headerTitle={dialogHeaderTitle}
	buttonName={buttonName}
	type="update"
	store={store}
	item={item}
	setExpanded={setExpanded}
	refreshPage={refreshPage}
      />
      <ConfirmationDialog
	open={confirmationDialogOpen}
	handleClose={handleConfirmationDialogClose}
	handleConfirmation={handleConfirmation}
	title={confirmationDialogTitle}
	content={confirmationDialogContent}
      />
    </div>
  );
}

