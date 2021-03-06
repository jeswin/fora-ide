/* @flow */
import React from "react";

import MainMenu from "./main-menu";
import SplitPane from "react-split-pane";
import ProjectTreeContainer from "../containers/project-tree-container";
import EditorContainer from "../containers/editor-container";
import ContextMenuContainer from "../containers/context-menu-container";
import ModalContainer from "../containers/modal-container";
import css from "./css";

const cssFix = `
  .Resizer.horizontal { display: none }
`;
// .SplitPane.vertical { position: relative !important; height: auto !important; }
// .SplitPane.vertical .Pane.vertical:last-child { display: flex; flex-direction: column }
// `;

class Workspace extends React.Component {
  render() {
    return(
      <div>
        <style dangerouslySetInnerHTML={{ __html: cssFix }}></style>
        <SplitPane id="main-container" split="horizontal" defaultSize="32">
          <MainMenu />
          <SplitPane id="workspace-container" split="vertical" minSize="200" defaultSize="240">
            <ProjectTreeContainer />
            <EditorContainer />
          </SplitPane>
        </SplitPane>
        <ContextMenuContainer />
        <ModalContainer />
      </div>
    );
  }
}

export default Workspace;
