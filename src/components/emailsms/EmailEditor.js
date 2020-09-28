import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { addSmsEmail } from "../../actions/settings.action";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const EmailEditor = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    draftToHtml(convertToRaw(editorState.getCurrentContent()));
  };

  let dispatch = useDispatch();

  let history = useHistory();

  const emailstate = (e) => {
    e.preventDefault();
    dispatch(
      addSmsEmail(
        "email",
        draftToHtml(convertToRaw(editorState.getCurrentContent()))
      )
    );
  };

  return (
    <React.Fragment>
      <div className="editor">
        <Editor
          editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
      <form>
        <textarea
          className="demo-content no-focus"
          disabled
          id="template"
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          name="template"
        />

        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={(e) => emailstate(e, "email")}
        >
          Save
        </button>

       
      </form>
    </React.Fragment>
  );
};

export default EmailEditor;
