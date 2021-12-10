import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import HtmlParser from "react-html-parser";

function TinyCloud() {
  const [value, setValue] = useState("");
  const handleEditorChange = (e) => {
    setValue(e.target.getContent());
  };

  return (
    <>
    <div style={{margin: '0 auto', width: '1000px'}}>
      <Editor
        init={{
          selector: "textarea",
          height: 500,
          menubar: "tools",
          plugins: [
              "codesample",
              "media",
              "advlist autolink lists link image",
              "charmap print preview anchor help",
              "searchreplace visualblocks code",
              "insertdatetime media table paste wordcount",
              "pageembed code preview",
              "checklist",
          ],
          toolbar:
            "codesample | undo redo | formatselect | bold italic | alignleft aligncenter alignright | media | bullist numlist outdent indent | help | pageembed code preview | checklist",
          media_live_embeds: true,
          menu: {
            format: {
              title: "Format",
              items:
                "checklist | bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat",
            },
          },
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onChange={handleEditorChange}
      />
      <button onClick={handleEditorChange}>submit</button>

      <div>{HtmlParser(value)}</div>
      </div>
    </>
  );
}

export default TinyCloud;
