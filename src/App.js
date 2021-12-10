import "./App.css";
// import MyEditor from "./Draft";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { useState } from "react";
// import HtmlParser from "react-html-parser";
// import TinyCloud from "./TinyCloud";
import { Button } from "./stories/Button";
import Anchor from "./stories/Anchor";
import useLink from "./hooks/useLink";

function App() {
  const link = useLink("href color target asd");

  return (
    <div className="App">
      <Button label="submit" />
      <a {...link}>Home</a>
    </div>
  );
}

export default App;
