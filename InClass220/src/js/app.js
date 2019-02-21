class AppComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="container">
                <ZipCodeInput />
                <EmailInput />
            </div>
        );
    };
}

var root = document.getElementById('root');
/*
const App = () => {
    return React.createElement('div', {}, [
        React.createElement(FormInput, {}),
    ]);
};
*/
ReactDOM.render(<AppComponent />, root);