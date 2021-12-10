import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React, { useState } from "react";
import "./App.css";

const Draft = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
      />
      ;
    </div>
  );
};

export default Draft;
