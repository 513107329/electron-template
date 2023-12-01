import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from 'antd'
import { LeftOutlined, RightOutlined, SyncOutlined } from '@ant-design/icons'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const wvRef = useRef<any>(null);

  function handleRefresh() {
    if(wvRef.current) wvRef.current.reload()
  }
  function handleBack() {
    if(wvRef.current) wvRef.current.goBack()
  }
  function handleGo() {
    if(wvRef.current) wvRef.current.goForward()
  }
  function handleForceRefresh() {
    if(wvRef.current) wvRef.current.reloadIgnoringCache()
  }

  return (
    <>
      <div>
        <a target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={handleBack}><LeftOutlined /></Button>
        <Button onClick={handleGo}><RightOutlined /></Button>
        <Button onClick={handleRefresh}><SyncOutlined /></Button>
        <Button onClick={handleForceRefresh}><SyncOutlined /></Button>
      </div>
      <webview
        ref={wvRef}
        style={{width: '400px', height: '200px'}}
        allowpopups
        className="web-view-content"
        src="http://www.baidu.com"
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
