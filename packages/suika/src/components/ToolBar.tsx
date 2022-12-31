import classNames from 'classnames';
import { useEffect, useContext, useState } from 'react';
import { EditorContext } from '../context';
import './Toolbar.scss';

const ToolBar = () => {
  const editor = useContext(EditorContext);
  const [tool, setTool] = useState('drawRect');

  useEffect(() => {
    if (editor) {
      editor.toolManager.on('change', (toolName: string) => {
        setTool(toolName);
      });
    }
  }, [editor]);

  return (
    <div className="suika-tool-bar">
      <button
        className={classNames({ active: tool === 'drawRect' })}
        onClick={() => {
          editor?.toolManager.setTool('drawRect');
        }}
      >
        矩形
      </button>
      <button
        className={classNames({ active: tool === 'select' })}
        onClick={() => {
          editor?.toolManager.setTool('select');
        }}
      >
        选择
      </button>
    </div>
  );
};

export default ToolBar;
