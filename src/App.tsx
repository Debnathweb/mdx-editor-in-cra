import React from "react";
import {
  MDXEditor,
  toolbarPlugin,
  KitchenSinkToolbar,
  listsPlugin,
  quotePlugin,
  headingsPlugin,
  linkPlugin,
  linkDialogPlugin,
  imagePlugin,
  tablePlugin,
  thematicBreakPlugin,
  frontmatterPlugin,
  codeBlockPlugin,
  sandpackPlugin,
  codeMirrorPlugin,
  directivesPlugin,
  AdmonitionDirectiveDescriptor,
  diffSourcePlugin,
  markdownShortcutPlugin,
  SandpackConfig,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

export default function App() {
  return (
    <MDXEditor
      markdown={"# hello world"}
      onChange={console.log}
      plugins={[
        toolbarPlugin({ toolbarContents: () => <KitchenSinkToolbar /> }),
        listsPlugin(),
        quotePlugin(),
        headingsPlugin(),

        linkPlugin(),
        linkDialogPlugin(),
        // eslint-disable-next-line @typescript-eslint/require-await
        // imagePlugin({
        //   imageUploadHandler: async () => '/sample-image.png',
        // }),
        tablePlugin(),
        thematicBreakPlugin(),
        frontmatterPlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: "txt" }),
        codeMirrorPlugin({
          codeBlockLanguages: {
            js: "JavaScript",
            css: "CSS",
            txt: "text",
            tsx: "TypeScript",
          },
        }),
        directivesPlugin({
          directiveDescriptors: [AdmonitionDirectiveDescriptor],
        }),
        // diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown }),
        markdownShortcutPlugin(),
      ]}
    />
  );
}
