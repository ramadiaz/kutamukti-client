"use client";
import "react-quill-new/dist/quill.bubble.css";
import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill from 'quill';
import Sources, { Delta, Range } from 'quill/core';

interface TextEditorProps {
    readOnly?: boolean;
    defaultValue?: Delta;
    onTextChange?: (delta: Delta, oldDelta: Delta, source: Sources) => void;
    onSelectionChange?: (range: Range | null, oldRange: Range | null, source: Sources) => void;
}

const TextEditor = forwardRef<Quill | null, TextEditorProps>(
    ({ readOnly = false, defaultValue, onTextChange, onSelectionChange }, ref) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const defaultValueRef = useRef<Delta | undefined>(defaultValue);
        const onTextChangeRef = useRef(onTextChange);
        const onSelectionChangeRef = useRef(onSelectionChange);

        useLayoutEffect(() => {
            onTextChangeRef.current = onTextChange;
            onSelectionChangeRef.current = onSelectionChange;
        });

        useEffect(() => {
            if (ref && typeof ref === 'object' && ref.current) {
                ref.current.enable(!readOnly);
            }
        }, [ref, readOnly]);

        useEffect(() => {
            const container = containerRef.current;
            if (!container) return;

            const editorContainer = container.appendChild(
                container.ownerDocument.createElement('div'),
            );

            const quill = new Quill(editorContainer, {
                theme: 'bubble',
            });


            if (ref && typeof ref === 'object') {
                ref.current = quill;
            }

            if (defaultValueRef.current) {
                quill.setContents(defaultValueRef.current);
            }

            quill.on(Quill.events.TEXT_CHANGE, (delta: Delta, oldDelta: Delta, source: Sources) => {
                onTextChangeRef.current?.(delta, oldDelta, source);
            });

            quill.on(Quill.events.SELECTION_CHANGE, (range: Range | null, oldRange: Range | null, source: Sources) => {
                onSelectionChangeRef.current?.(range, oldRange, source);
            });

            return () => {
                if (ref && typeof ref === 'object') {
                    ref.current = null;
                }
                container.innerHTML = '';
            };
        }, [ref]);

        return <div ref={containerRef}></div>;
    },
);

TextEditor.displayName = 'TextEditor';
export default TextEditor;