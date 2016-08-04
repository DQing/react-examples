const App = React.createClass({
    getInitialState(){
      return{
          name:"douqing",
          password:"111111"
      }  
    },
    onEditor:function(value){
        this.setState({password:value});
    },
    render: function () {
        return (
            <div>
                <User name = {this.state.name}/>
                <Password password = {this.state.password} onEditor = {this.onEditor}/>
            </div>
        )
    }
});
const User = React.createClass({
    render: function () {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
});
const Password = React.createClass({
    editor:function () {
        this.props.onEditor("123456");
    },
    render: function () {
        return (
            <div>
                <p>{this.props.password}</p>
                <button onClick = {this.editor}>editor</button>
            </div>
        )
    }
});
ReactDOM.render(<App />, document.getElementById('content'));

