import React, { Fragment } from 'react';
import "./App.css"
import { UncontrolledTooltip, Button } from 'reactstrap';
export default function LivePreviewExample() {
  return (

    <>
    <div class="box"> 


  <div>
    <Fragment>
      <div className="text-center">
        <Button
          outline
          color="primary"
          className="button1 m-2"
          placement="top-left"
          title="Tooltip on top"
          id="TooltipExampleBasicBottom">
          Button1
        </Button>
        
        <Button
          outline
          color="primary"
          className="button2 m-2"
          placement="top-riight"
          title="Tooltip on top"
          id="TooltipExampleBasicBottom">
          Button2
        </Button>

        <Button
          outline
          color="primary"
          className="button3 m-2"
          placement="bottom-left"
          title="Tooltip on top"
          id="TooltipExampleBasicBottom">
          Button3
        </Button>
        <Button
          outline
          color="primary"
          className="button4 m-2"
          placement="bottom-right"
          title="Tooltip on top"
          id="TooltipExampleBasicBottom">
          Button4
        </Button>
        <Button
          outline
          color="primary"
          className="button5 m-2"
          placement="middle"
          title="Tooltip on top"
          id="TooltipExampleBasicBottom">
          Button5
        </Button>
        <UncontrolledTooltip
         className="tooltip"
          placement="bottom"
          container="body"
          target="TooltipExampleBasicBottom">
          Tooltip text goes here
        </UncontrolledTooltip>
        </div>
    </Fragment>
    </div>
    </div>

    
    </>
  );
}