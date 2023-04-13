import './App.css';

function App() {
    return (<div className="App">
        <aside className="sidemenu">
            <div className="sidemenu-button">
                <span>+</span>
                New Chat
            </div>
        </aside>
        <section className="chatsection">
            <div className="chat-log">
                Messages
            </div>
        </section>
    </div>
    )
}
export default App;