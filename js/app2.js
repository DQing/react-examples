const App = React.createClass({
    render: function () {
        return (
            // <ul>
            //      {React.Children.map(this.props.children, item=> {
            //          return <li  key = {index}>{item}</li>
            //      })
            //      }
            // </ul>
            < ul >
                {
                    this.props.children.map((item, index)=> {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        )
    }
});

ReactDOM.render(
    <App>
        <span>React child</span>
        <span>hello</span>
        <span>world</span>

    </App>, document.getElementById('content'));