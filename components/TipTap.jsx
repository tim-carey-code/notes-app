'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import StarterKit from '@tiptap/starter-kit'
import { common, createLowlight } from 'lowlight'

const lowlight = createLowlight(common)

const Tiptap = ({ text, onTextChange }) => {

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    editorProps: {
      attributes: {
        class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
    content: text, // Set the initial content
    onUpdate({ editor }) {
      const content = editor.getHTML();
      onTextChange(content); // Notify the parent component of content changes
    },
  });

  return (
    <EditorContent editor={editor} />
  );
};



export default Tiptap