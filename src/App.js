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

            <div className="chat-input-holder">
                <form>
                    <input className="chat-input-textarea" rows='1' placeholder="Type your message here"></input>
                </form>
            </div>
        </section>
    </div>
    )
}
export default App;